import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const value = event.target.value;
    this.props.handleSearchFunction(value);
    this.props.searchFunction(value)
  }

  render() {
    return (

      <input type="text"
      value = {this.props.searchText}
      onChange = {this.handleUpdate}
      className="form-control form-search" />
    )
  }
}

 SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
  handleSearchFunction: PropTypes.func.isRequired
 }
export default SearchBar
