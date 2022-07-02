import React, { useState } from 'react'
import Title from "./Title"
import { Spin as Hamburger } from 'hamburger-react'
import Titledos from './Titledos';
import "../index.css";
import nano from "../img/nano.png";
import face from "../img/facebook.png"
import git from "../img/github.png"
import lin from "../img/linkedin.png"


function NavBar() {

    const [open,setOpen]=useState(false);
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"SKILLS",link:"/"},
        {name:"CONTACT",link:"/"},
        {name:"RESUME",link:"/"},
      ];


      
  return (


    <div>
        <div className={`transition-all duration-500 ease-in ${open?"hidden":""}`}>
        <Title name="NanoWeb'Dev"/>
        </div>
        <div className={`transition-all duration-500 ease-in ${open?"":"hidden"}`}>
        <Titledos name="NanoWeb'Dev"/>
        </div>
        <div className='absolute right-0 m-4 z-50' onClick={()=>setOpen(!open)}>
        <Hamburger direction='right' duration={1} color="white" size={40}/>
        </div>
        <div className={` z-40 absolute bg-white text sm:text-xl lg:text-3xl h-full left-0 w-2/4 transition-all duration-1000 ease-in-out ${open?"":"-left-[100%]"}`}>

        <div className='bg-transparent flex flex-col mt-28 place-items-center relative md:-left-[30px] sm:-left-[30px] mb:-left-[15px]'>
        {Links.map((link)=>(
            <a class="hover-3" className=' cursor-pointer hover-3 xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[25px] mb:text-[30px] h-10 m-1 box-content bg-transparent font-medium ml-10 mt-6' href={link.link}>{link.name}</a>
            ))}

        </div>
        <img className="absolute left-[100%] top-0 h-[100%] hidden lg:block" src={nano} alt="" srcset="" />
        <div className='flex flex-row gap-10 bg-transparent items-center justify-center mt-12'>
          <a className='bg-transparent' target="blank" href="https://www.facebook.com/NanoMarqez/"><img className='h-auto w-auto bg-transparent duration-500 hover:rotate-[360deg] hover:scale-150' src={face} alt="" /></a>
          <a className='bg-transparent' target="blank" href="https://www.linkedin.com/in/federico-marquez-139ba1236/"><img className='h-auto w-auto bg-transparent duration-500 hover:rotate-[360deg] hover:scale-150' src={lin} alt="" /></a>
          <a className='bg-transparent' target="blank" href="https://github.com/Nanomarquez/"><img className='h-auto w-auto bg-transparent duration-500 hover:rotate-[360deg] hover:scale-150' src={git} alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default NavBar

