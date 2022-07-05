import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function Progres(props) {
    
  return (
<div className='flex flex-col items-center justify-center'>
  <h1 className='uppercase'>{props.name}</h1>
  <div className='relative'>
<CircularProgress value={props.valor} color='black' size='120px'>
  <CircularProgressLabel>{props.valor}%</CircularProgressLabel>
</CircularProgress>
  </div>
</div>
  )
}

export default Progres