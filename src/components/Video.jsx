import React from 'react'
import Videoo from '../img/nanoo.mp4'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='h-[350px] w-[350px] overflow-hidden md:right-0'>
        <ReactPlayer
        url={Videoo}
        playing='true'
        loop='true'
        muted='true'
        width='400px'
        height='400px'
        />
    </div>
  )
}

export default Video