import './App.css'
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayList from './DisplayList';

export default class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "All",
            singer: "All",
            sort: "Default"
        };

    }

    onSelectFilterLanguage = event => {
        this.setState(
            { language: event }
        );
    }
    onSelectFilterSinger = event => {
        this.setState(
            { singer: event }
        );
    }

    matchesFilters = item => {
        // condition to show item
        if (((this.state.language === item.language) || (this.state.language === "All"))
            && ((this.state.singer === item.singer) || (this.state.singer === "All"))) {
            return true;
        }
        // or else dont show it
        else {
            return false;
        }
    }

    onSortList = event => {
        this.setState(
            { sort: event }
        );
    }

    sortComparison = (item1, item2) => {
        if (this.state.sort == "Default") {
            return 0;
        }
        if (item1.duration > item2.duration) {
            if (this.state.sort == "LtS") {
                return -1;
            }
            else {
                return 1;
            }
        }
        else { // Case where item2 duration > item1 duration
            if (this.state.sort == "LtS") {
                return 1;
            }
            else {
                return -1;
            }
        }
    }

    render() {
        return (
            <div className="FilteredList">
                <div className="navigation">
                    <Nav defaultActiveKey="All" variant="pills">
                        <Nav.Item><Nav.Link eventKey="disabled" disabled>Language</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterLanguage}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Korean" onSelect={this.onSelectFilterLanguage}>Korean</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="English" onSelect={this.onSelectFilterLanguage}>English</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Japanese" onSelect={this.onSelectFilterLanguage}>Japanese</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Chinese" onSelect={this.onSelectFilterLanguage}>Chinese</Nav.Link></Nav.Item>
                    </Nav>
                    <Nav defaultActiveKey="All" variant="pills">
                        <Nav.Item><Nav.Link eventKey="disabled" disabled>Singer</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSinger}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Male" onSelect={this.onSelectFilterSinger}>Male</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Female" onSelect={this.onSelectFilterSinger}>Female</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Other" onSelect={this.onSelectFilterSinger}>Other</Nav.Link></Nav.Item>
                    </Nav>
                    <Nav defaultActiveKey="Select" variant="pills">
                        <Nav.Item><Nav.Link eventKey="disabled" disabled>Sort by Time</Nav.Link></Nav.Item>
                        <NavDropdown title="Select" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Nav.Link eventKey="Default" onSelect={this.onSortList}>Default</Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item><Nav.Link eventKey="LtS" onSelect={this.onSortList}>Long to Short</Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item><Nav.Link eventKey="StL" onSelect={this.onSortList}>Short to Long</Nav.Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
                <div className = "songGallery">
                <DisplayList list={this.props.list.filter(this.matchesFilters).sort(this.sortComparison)} addSong={this.props.addSong}/>
                </div>
            </div>
        )
    }
}