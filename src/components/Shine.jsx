import React from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css';
function Shine(props) {
  Aos.init();
  return (
    <div data-aos="zoom-in" data-aos-easing="linear"
      data-aos-duration="1300">
      <Brillo>
        <h1>{props.name}</h1>
      </Brillo>
    </div>
  )
}

export default Shine

const Brillo = styled.div`
h1{ 
    font-size: 60px;
    font-weight: 1000;
    letter-spacing: 7px;
    padding-top: 80px;
    margin-bottom: 10px;
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%)20%, hsl(0, 0%, 30%) 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s infinite linear;
}
`