import React from 'react'
import Video from './Video'

function About() {
  return (
    <div className='flex flex-row mb:flex-col pt-14'>
        <div className='absolute h-[300px] w-[500px] left-12 pt-14'>
        <h1 className='text-white text-2xl text-center'>Hello, I'm Nano</h1>
        <br />
        <p className='text-white text-center text-'>I take the WEB seriously. My main objective at the moment is to find a company and restore
             its trust with responsibility and hard work. In search of a good work team and achieve a code that
             revolutionizes and helps the community. Actually im student of bootcamp Henry. I don't have professional experience,
             but I have finished freelance jobs as well as several to finish and a lot of enthusiasm.</p>

        </div>
             <div className='absolute right-5'>
        <Video/>

             </div>
    </div>
  )
}

export default About