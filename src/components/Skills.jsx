import React from 'react'
import Hifive from './Hifive'
import styled from 'styled-components'

function Skills() {
  return (
    
        <div className='flex flex-col'>
          <Titulo>
<h1 className='h-12 text-center text-6xl font-extrabold '>My Skills</h1>
          </Titulo>
          
<div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
  <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
</div>
<Hifive/>
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
  z-index:50;
  pointer-events: none;
  transition: 1s;
  -webkit-box-reflect: below 1px linear-gradient(transparent,#0008);
  line-height: 0.10em;
  outline: none;
  animation: animatedos 5s linear infinite;
  background: transparent;
}`
