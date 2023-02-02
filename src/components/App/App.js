import React from 'react';
import './App.css';
import Spotify from '../utils/spotify';
class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [],
      PlaylistName: 'new Playlist',
      PlayListTracks: [],
    };
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playListName = this.playListName.bind(this);
    this.saveTracks = this.saveTracks.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }
  search(term) {
    Spotify.search(term).then((searchresults) => {
      this.setState({ searchResults: searchresults });
    });
  }
  addTrack(track) {
    let tracks = this.state.PlayListTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ PlayListTracks: tracks });
  }
  removeTrack(removeTrack) {
    let tracks = this.state.PlayListTracks;
    if (!tracks.find(removeTrack.id)) {
      return;
    }
    tracks = tracks.filter((track) => track.id !== removeTrack.id);
    this.setState({ PlayListTracks: tracks });
  }
  removeTrackSearch(trackRemove) {
    let tracks = this.state.SearchResults;
    tracks = tracks.filter((track) => track.id !== trackRemove.id);
    this.setState({ searchResults: tracks });
  }
  doThese(track) {
    this.addTrack(track);
    this.removeTrack(track);
  }
  playListName(name) {
    this.setState({ playListName: name });
  }
  saveTracks() {
    const trucksUrl = this.state.PlayListTracks.map((track) => track.uri);

    Spotify.savePlayListName(this.state.PlaylistName, trucksUrl).then(() => {
      this.setState({ PlaylistName: 'New PlayList', PlayListTracks: [] });
    });
  }
}
function App() {
  return (
    <div>
      <h1>
        <a href="http://localhost:3000">Musically</a>
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="app-playlist ">
          <SearchResult
            searchResults={this.state.searchResults}
            onAdd={this.doThese}
          />
          <PlayList
            PlayListTracks={this.state.PlayListTracks}
            onNameChange={this.playListName}
            onRemove={this.trackRemove}
            onSave={this.savePlayListName}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
