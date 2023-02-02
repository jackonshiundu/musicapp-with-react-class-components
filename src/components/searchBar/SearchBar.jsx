import React, { Component } from 'react';
import './SearchBar.css';
export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleTermChange(e) {
    this.setState({ name: e.target.value });
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  handleEnter(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  }
  render() {
    return (
      <div className="searchBar">
        <input
          placeholder="Enter the song name or artist"
          onChange={this.handleTermChange}
          onKeyUp={this.handleEnter}
        />
        <button className="searchButton">Click To Search</button>
      </div>
    );
  }
}

export default SearchBar;
