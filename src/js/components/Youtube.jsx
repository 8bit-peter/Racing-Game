import React from "react";
import YouTube from 'react-youtube'; //dodana muzyka============================================

class Youtube1 extends React.Component {
    render() {
      const opts = {
        height: '0',
        width: '0',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          loop: 1
        }
      };
   
      return (
        <YouTube
          videoId="eAmFihvUF1Y"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    // _onReady(event) {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }
  }

//====================================================================================

export {Youtube1}