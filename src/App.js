import './App.css';
import React, { Component } from "react";
import FilteredList from './FilteredList';
import Playlist from './Playlist';

const songs = [
  { title: "HIP", language: "Korean", artist: "MAMAMOO", singer: "Female", duration: 195, source: './hip.jpg' },
  { title: "TOP", language: "Korean", artist: "Stray Kids", singer: "Male", duration: 186, source: './top.jpg' },
  { title: "Blueming", language: "Korean", artist: "IU", singer: "Female", duration: 217, source: './blue.jpg' },
  { title: "Wake Me Up", language: "English", artist: "Avicii", singer: "Male", duration: 250, source: './wmu.jpg' },
  { title: "Rather Be", language: "English", artist: "Clean Bandit", singer: "Female", duration: 228, source: './rb.jpg' },
  { title: "Flamingo", language: "Japanese", artist: "Yonezu Kenshi", singer: "Male", duration: 196, source: './flamingo.jpg' },
  { title: "BL", language: "Japanese", artist: "Queen Bee", singer: "Other", duration: 193, source: './bl.jpg' },
  { title: "Night Diver", language: "Japanese", artist: "Miura Haruma", singer: "Male", duration: 203, source: '/nd.jpg' },
  { title: "Ready Steady", language: "Japanese", artist: "Giga", singer: "Other", duration: 209, source: './rs.jpg' },
  { title: "Sunflower", language: "Japanese", artist: "Orangestar", singer: "Female", duration: 214, source: './sunflower.jpg' },
  { title: "Nocturne", language: "Chinese", artist: "Jay Chou", singer: "Male", duration: 227, source: './noct.jpg' },
  { title: "Super star", language: "Chinese", artist: "SHE", singer: "Female", duration: 196, source: './superstar.jpg' }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myPlaylist: [],
      counter: 0,
      playTime: 0
    }
  }

  addSong = item => {
    const newSong = {
      title: item.title,
      artist: item.artist,
      duration: item.duration,
      source: item.source,
      key: this.state.counter
    }
    // this.state.myPlaylist.push(newSong);
    const myPlaylist = [...this.state.myPlaylist, newSong];
    this.setState({
      myPlaylist: myPlaylist,
      counter: this.state.counter + 1
    });
    this.calculateTime(myPlaylist);
  }

  deleteSong = key => {
    const myPlaylist = this.state.myPlaylist.filter(song => song.key != key);
    this.setState({ myPlaylist });
    this.calculateTime(myPlaylist);
  }

  calculateTime = (list) =>{
    var total = 0;
    for (var i = 0; i < list.length; i++){
      total = total + list[i].duration
    }
    this.setState({
      playTime: total
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="selection">
          <h1 style={{ color: 'white' }}>Music Playlist</h1>
          <div><FilteredList list={songs} addSong={this.addSong} /></div>
        </div>
        <div className="playlist">
          <h3>Song Queue</h3>
          <h4>Total Time: {Math.floor(this.state.playTime / 60)}:{this.state.playTime % 60}</h4>
          <div><Playlist list={this.state.myPlaylist} deleteSong={this.deleteSong}/></div>
        </div>
      </div>
    )
  }
}
