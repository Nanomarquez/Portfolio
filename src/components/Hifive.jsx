import React from 'react'
import Hi from '../img/saludob.mp4'
import ReactPlayer from 'react-player'

function Hifive() {
  return (
    <div className='relative h-[200px] bottom-5 w-[250px] overflow-hidden'>
        <ReactPlayer 
        className='absolute top-5'
        url={Hi}
        playing='true'
        loop='true'
        muted='true'
        width='300px'
        height='290px'
        />
    </div>
  )
}

export default Hifive