import React, { Component } from 'react';
import './App.css';
import videos from './videos.json';

import Video from './Video.js';

class App extends Component {
  render() {
    return (
      <div className="ljungblut-videos">
        <div class="item">Ljungblut</div>
        {videos.map(video => <Video key={video.id} {...video} />)}
        <div class="item">Ikke alle netter er like sorte</div>
      </div>
    );
  }
}

export default App;
