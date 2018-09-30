import React, { Component } from 'react';
import './App.css';
import videos from './videos.json';

import Video from './Video.js';

class App extends Component {
  render() {
    return (
      <div className="ljungblut-videos">
        {videos.map(video => <Video key={video.id} {...video} />)}
      </div>
    );
  }
}

export default App;
