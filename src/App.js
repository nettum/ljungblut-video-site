import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';
import videos from './videos.json';
import Video from './Video.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
    }
  }

  onVideoReady(event) {
    console.log('ready');
    event.target.playVideo();
  }

  startVideo = (id) => {
    console.log('start');
    this.setState({
      videoId: id,
    });
  };

  resetVideoId = () => {
    console.log('reset');
    this.setState({
      videoId: null,
    });
  };

  renderVideo() {
    const { videoId } = this.state;
    const opts = {
      playerVars: {
        controls: 0,
      }
    };
    return (
      videoId !== null ?
        <div className="youtube-wrapper">
          <YouTube 
            videoId={videoId}
            onReady={this.onVideoReady}
            onPause={this.resetVideoId}
            onEnd={this.resetVideoId}
            opts={opts}
          />
        </div>
      : null
    );
  }

  render() {
    return (
      <div className="ljungblut-videos">
        <div className="item">Ljungblut</div>
        {videos.map(video => <Video onClick={this.startVideo} key={video.id} {...video} />)}
        <div className="item">Ikke alle netter er like sorte</div>
        {this.renderVideo()}
      </div>
    );
  }
}

export default App;
