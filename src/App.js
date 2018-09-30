import React, { Component } from 'react';
import './App.css';
import videos from './videos.json';

import Video from './Video.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    }
  }

  startVideo = (id) => {
    this.setState({
      isPlaying: true,
    });
  };

  render() {
    const { isPlaying } = this.state;
    return (
      <div className="ljungblut-videos">
        <div className="item">Ljungblut</div>
        {videos.map(video => <Video onClick={this.startVideo} key={video.id} {...video} />)}
        <div className="item">Ikke alle netter er like sorte</div>
        {isPlaying && <div className="youtube-wrapper">PLAYER WRAPPER</div>}
      </div>
    );
  }
}

export default App;
