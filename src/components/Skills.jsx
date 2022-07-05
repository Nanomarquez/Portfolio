import React from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Experience from './Experience'
function Skills() {
  Aos.init()
  return (

    <div className='h-[500px]'>
      <Titulo  data-aos="fade-top"
     data-aos-duration="1000">
        <h1 className='h-12 text-center text-6xl font-extrabold'>Skills</h1>
      </Titulo>
      <Experience/>
      </div>


  )
}

export default Skills

const Titulo = styled.div`
h1{
  position:relative;
  margin: 30px;
  margin-top:40px;
  z-index:30;
  pointer-events: none;
  transition: 1s;
  -webkit-box-reflect: below 1px linear-gradient(transparent,#0008);
  line-height: 0.9em;
  outline: none;
  animation: animatedos 5s linear infinite;
  background: transparent;
}`
