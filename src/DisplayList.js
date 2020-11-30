import './App.css'
import React, { Component } from "react";
import { CardDeck, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {ListItemIcon} from '@material-ui/core';

export default class DisplayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    // Function to make a card from a given item
    makeCard = item => {
        return (
            <div className = "card-wrapper">
                <Card>
                    <Card.Img variant="top" src={item.source} alt={item.title} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Title: {item.title}
                        </Card.Text>
                        <Card.Text>
                            Artist: {item.artist}
                        </Card.Text>
                        <Card.Text>
                            Language: {item.language}
                        </Card.Text>
                        <Card.Text>
                            Singer: {item.singer}
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.props.addSong(item)}>
                            Add Song</Button>
                        <div className="IconWrap"><PlaylistAddIcon /></div>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Duration: {Math.floor(item.duration / 60)}:{item.duration % 60}</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }

    // Renders the list of songs to choose from

    render() {
        return (
            <div>
                <CardDeck>
                    {this.props.list.map(item => { return this.makeCard(item) })}
                </CardDeck>
                {(this.props.list.length > 0) ? <h4>Have Fun Choosing!</h4> : <h4>No songs matches these Criteria</h4>}
            </div>
        )
    }
}