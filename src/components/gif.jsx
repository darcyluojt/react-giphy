import React, { Component } from 'react';

class Gif extends Component {
  handleUpdate = (event) =>{
    this.props.onClickFunction(event);
  }

  render() {
    return (
      <img src={this.props.src}
      onClick={this.handleUpdate}
      alt="" className="gif" />
    );
  }
}

export default Gif;
