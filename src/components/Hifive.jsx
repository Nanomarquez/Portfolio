import React from 'react'
import Hi from '../img/saludob.mp4'
import ReactPlayer from 'react-player'

function Hifive() {
  return (
    <div className='absolute h-[300px] w-[300px] overflow-hidden right-0 bg-white'>
        <ReactPlayer 
        className='relative -rotate-45 right-[-15px]'
        url={Hi}
        playing='true'
        loop='true'
        muted='true'
        width='400px'
        height='400px'
        />
    </div>
  )
}

export default Hifive