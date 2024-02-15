import React from 'react'
import './App.css'
import myvideo from './assets/vedio-1/myvideo.mp4'
import VideoThumb from './assets/vedio-1/image.webp'
import VideoPlayer1 from './video-player-app/videoplayer1'
import NavBarComponent from './video-player-app/navbar'

const App = () => {
  return (
   <>
<NavBarComponent/>
 <div className='video-wrapper' >
<VideoPlayer1 src={myvideo} thumbnail={VideoThumb}/> <br/><br/>
{/* <Videoplayer2 src={myvideo} thumbnail={VideoThumb} /> */}
 </div>
   
  
   </>
  )
}

export default App