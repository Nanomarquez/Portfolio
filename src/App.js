import React from 'react';
import NavBar from './components/NavBar';
import Shine from './components/Shine';
import About from './components/About';

function App() {


  return (
      <div className='App'>
        <NavBar/>
      <div className='text-center'>
        <Shine name="FEDERICO MARQUEZ"/>
      </div>

      <About/>

      </div>  
  );
}

export default App;
