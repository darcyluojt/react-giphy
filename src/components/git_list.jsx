import React, { Component } from 'react'
import Gif from './gif.jsx'
import PropTypes from 'prop-types';


class GitList extends Component {
  handleUpdate = (event) => {
    const url = event.target.src;
    this.props.selectedFunction(url);
  }
  render() {
    return(
    <div className="gif-list">
      {this.props.list.map((gif, index) =>{
        return (
        <Gif src={gif} key={index}
        onClickFunction = {this.handleUpdate}
        />
      )}
        )}
    </div>
    )
  }
}

GitList.propTypes = {
  list: PropTypes.array.isRequired,
  selectedFunction: PropTypes.func.isRequired
}
export default GitList
