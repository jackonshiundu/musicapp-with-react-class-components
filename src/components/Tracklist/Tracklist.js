import React, { Component } from 'react';
import 'Tracklist.css';
import Tracks from '../track/Tracks';
export class Tracklist extends Component {
  render() {
    return (
      <div className="track-list">
        {this.props.tracks.map((track) => {
          return (
            <Tracks
              track={track}
              kei={track.id}
              onAdd={this.props.onAdd}
              isRemoval={this.props.isRemoval}
              onRemoval={this.props.onRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default Tracklist;
