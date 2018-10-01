import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    const { id, title, image, onClick } = this.props;
    const bgStyle = {
      backgroundImage: `url(${require(`./images/${image}`)}`
    }
    return (
      <div className="item video" style={bgStyle} onClick={() => onClick(id)}>
          <div>{title}</div>
      </div>
    );
  }
}

export default Video;
