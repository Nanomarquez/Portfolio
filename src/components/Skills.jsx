import React from 'react'
// eslint-disable-next-line
import Hifive from './Hifive'
import styled from 'styled-components'
import Progres from './Progres'

function Skills() {
  return (

    <div>
      <Titulo>
        <h1 className='h-12 text-center text-6xl font-extrabold '>Skills</h1>
      </Titulo>
      <br />

      <div>
       <Progres/>
      </div>
    </div>


  )
}

export default Skills

const Titulo = styled.div`
h1{
  position:relative;
  margin: 30px;
  margin-left:15px;
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
