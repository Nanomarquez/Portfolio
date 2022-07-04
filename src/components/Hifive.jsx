import React from 'react'
import Hi from '../img/saludob.mp4'
import ReactPlayer from 'react-player'

function Hifive() {
  return (
    <div className='absolute h-[300px] left-0 w-[300px] overflow-hidden bg-white'>
        <ReactPlayer 
        className='relative rotate-45 left-[-100px]'
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