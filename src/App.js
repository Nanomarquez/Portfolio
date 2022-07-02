import React from 'react';
import NavBar from './components/NavBar';
import Shine from './components/Shine';
import About from './components/About';
import Skills from './components/Skills';

function App() {


  return (
      <div className='App'>
        <div className='bg-black'>
        <NavBar/>
      <div className='text-center mb-12'>
        <Shine name="FEDERICO MARQUEZ"/>
      </div>
        <About/>
        </div>
        <div className='bg-white'>
          <Skills/>
        </div>
      </div>  
  );
}

export default App;
