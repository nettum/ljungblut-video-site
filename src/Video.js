import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    const { id, title, image } = this.props;
    const bgStyle = {
      backgroundImage: `url(${require(`./images/${image}`)}`
    }
    return (
      <div className="item video" style={bgStyle}>
        <span>{title}</span>
      </div>
    );
  }
}

export default Video;
