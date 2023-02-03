import React, { Component } from 'react';
import './track.css';
export class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(e) {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.tracks.name}</h3>
          <p>
            {this.props.track.artist} |{this.props.truck.album}
          </p>
          <iframe
            src={'https://open.spotify.com/embed/track/' + this.props.track.id}
            frameborder="0"
            height="300"
            width="80"
            allowTransparency="True"
            allow="encrypted-media"
            title="preview"
          ></iframe>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Tracks;
