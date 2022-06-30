import React from 'react'
import styled from 'styled-components'

function Shine(props) {
  return (
    <div>
        <Brillo>
        <h1>{props.name}</h1>
        </Brillo>
    </div>
  )
}

export default Shine

const Brillo = styled.div`
h1{ 
    font-size: 50px;
    font-weight: 1000;
    letter-spacing: 7px;
    padding: 64px;
    padding-top: 80px;
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%)20%, hsl(0, 0%, 30%) 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s infinite linear;
}
`