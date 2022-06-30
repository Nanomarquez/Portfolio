import React from 'react'
import "../index.css"
import styled from 'styled-components'

function Title(props) {

  return (

<>
<Titulo>
  <h1>{props.name}</h1>
</Titulo>
</>
    
  )
}

export default Title
const Titulo = styled.div`
h1{
  position:absolute;
  margin: 30px;
  margin-left:15px;
  margin-top:15px;
  z-index: 100;
  font-size: 140%;
  pointer-events: none;
  font-weight: bold;
  transition: 1s;
  -webkit-box-reflect: below 1px linear-gradient(transparent,#0008);
  line-height: 0.70em;
  outline: none;
  animation: animate 5s linear infinite;
  background: transparent;
}`
