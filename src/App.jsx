import React from 'react';
import Home from './pages/Home';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className='w-[1216px] max-w-[1216px]'>
      <Home />
      <Stacks />
      <Projects />
    </div>
  )
}

export default App