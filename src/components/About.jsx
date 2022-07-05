import React  from 'react'
import Video from './Video'
import Aos from 'aos'
import 'aos/dist/aos.css';

function About() {

     
          Aos.init();

     return (
          <div className='flex flex-col items-stretch md:flex-row md:w-[90vw] mt-5'>
               

               <div data-aos="fade-right"
     data-aos-duration="1000" data-aos-easing="linear" class="m-6 p-6 md:w-screen align-center bg-gradient-to-l from-gray-400 via-white to-gray-400 rounded-lg border-gray-100 shadow-lg shadow-white">
                         <h2 class="mb-5 text-center text-3xl bg-transparent font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-black via-gray-500 to-black">Hello I'm Nano</h2>
                    <p class="font-bold text-center text-lg text-gray-700 bg-transparent">I take the WEB seriously. My main objective at the moment is to find a company and restore its trust with responsibility and hard work. In search of a good work team and achieve a code that revolutionizes and helps the community. Actually im student of bootcamp Henry. I don't have professional experience, but I have finished freelance jobs as well as several to finish and a lot of enthusiasm.</p>
                    <a href="/" class="flex shadow-md relative mt-4 py-2 mx-[30%] justify-center text-sm font-medium text-white bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 hover:shadow-black duration-500 transition-ease">
                         Read more
                         <svg class="ml-2 -mr-1 w-4 h-4 bg-transparent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/20/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                            
               </div>
               <div data-aos="fade-left"
     data-aos-duration="1500" className='flex relative justify-center'>
                    <Video/>

               </div>
          </div>
     )
}

export default About