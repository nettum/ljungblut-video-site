import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="video">
        {title}
      </div>
    );
  }
}

export default Video;
