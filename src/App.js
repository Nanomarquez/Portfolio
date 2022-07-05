import React from 'react';
import NavBar from './components/NavBar';
import Shine from './components/Shine';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

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
        <div className='bg-white h-screen relative pb-10'>
          <Skills/>
        </div>
        <div className='pt-10 max-h-screen'>

          <Portfolio/>
        </div>
        
        
      </div>  
  );
}

export default App;
