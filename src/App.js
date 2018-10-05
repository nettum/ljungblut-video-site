import React, { Component } from 'react';
import YouTube from 'react-youtube';

import Video from './Video';
import Icon from './Icon';

import videos from './videos';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
    };
  }

  onVideoReady(event) {
    event.target.playVideo();
  }

  startVideo = (id) => {
    window.scrollTo(0, 0);
    this.setState({
      videoId: id,
    });
  };

  resetVideoId = () => {
    this.setState({
      videoId: null,
    });
  };

  playNext = () => {
    const { videoId } = this.state;
    const videoKey = videos.findIndex(video => video.id === videoId);
    if (videoKey < videos.length-1) {
      this.setState({
        videoId: videos[videoKey+1].id,
      });
    } else {
      this.resetVideoId();
    }
  }

  renderVideo() {
    const { videoId } = this.state;
    const opts = {
      playerVars: {
        autoplay: 1,
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
            onEnd={this.playNext}
            opts={opts}
          />
        </div>
      : null
    );
  }

  render() {

    return (
      <div className="ljungblut-videos">
        <div className="item">
          <div className="start">Ljungblut< br/>Ikke alle netter er like sorte</div>
        </div>
        {videos.map(video => <Video onClick={this.startVideo} key={video.id} {...video} />)}
        <div className="item">
          <div className="end">
            <a href="https://www.facebook.com/Ljungblut-86549322482/" rel="noopener noreferrer" target="_blank">
              <Icon type="facebook" />
            </a>
            <a href="https://www.instagram.com/ljungblut/" rel="noopener noreferrer" target="_blank">
              <Icon type="instagram" />
            </a>
            <a href="https://www.youtube.com/user/LjungblutTV/" rel="noopener noreferrer" target="_blank">
              <Icon type="youtube" />
            </a>
          </div>
        </div>
        {this.renderVideo()}
      </div>
    );
  }
}

export default App;
