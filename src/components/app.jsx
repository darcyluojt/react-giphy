import React, { Component } from 'react';
import config from '../config.js';
import SearchBar from './search_bar.jsx';
import GitList from './git_list.jsx';
import Gif from './gif.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selected: null,
      gifList: [],
    }

  }

  handleSearch = (value) => {
    this.setState({
      searchText: value
    })
  }

  setSelected = (value) => {
    this.setState({
      selected: value
    })
  }

  search = (query) => {
    const API_KEY = config.GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      const urls = data.data.slice(0,10).map(
        gif => gif.images.downsized.url);
        this.setState({
          gifList: urls
        });
  })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar
          searchText={this.state.searchText}
          handleSearchFunction={this.handleSearch}
          searchFunction={this.search} />
          <div className="selected-gif">
            <Gif
            src={this.state.selected}/>
          </div>
        </div>
        <div className="right-scene">
          <GitList
          list={this.state.gifList}
          selectedFunction={this.setSelected}
           />
        </div>
      </div>
    );
  }
}

export default App;
