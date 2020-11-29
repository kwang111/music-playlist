import './App.css'
import React, { Component } from "react";
import { CardColumns, Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemIcon } from '@material-ui/core';
import { StayPrimaryPortraitSharp } from '@material-ui/icons';

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    playlistCard = item => {
        return (
            <div className="playlistCard">
                <div className="imageWrapper">
                    <img src={item.source} alt={item.title} />
                </div>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                Artist: {item.artist}
                            </Card.Text>
                            <Card.Text>
                                Duration: {Math.floor(item.duration / 60)}:{item.duration % 60}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.props.deleteSong(item.key)}>
                                Delete Song</Button>
                            <ListItemIcon>
                                <div className="IconWrap"><DeleteIcon /></div>
                        </ListItemIcon>
                        </Card.Body>
                    </Card>
            </div>
        )
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {(this.props.list.length > 0) ? this.props.list.map(item => { return this.playlistCard(item) }) : <h4>No Songs in Playlist</h4>}
                </ListGroup>
            </div>
        )
    }
}