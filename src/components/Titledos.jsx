import React from 'react'
import styled from 'styled-components'
import "../index.css"

function Titledos(props) {
    return (
        <div>
            <Titulodos>
                <h1>{props.name}</h1>
            </Titulodos>
        </div>
    )
}

export default Titledos

const Titulodos = styled.div`
h1{
  position:absolute;
  margin: 30px;
  margin-left:15px;
  margin-top:15px;
  z-index: 100;
  font-size: 140%;
  color:black;
  pointer-events: none;
  font-weight: bold;
  transition: 1s;
  -webkit-box-reflect: below 1px linear-gradient(transparent,#0008);
  line-height: 0.70em;
  outline: none;
  background: transparent;
}`