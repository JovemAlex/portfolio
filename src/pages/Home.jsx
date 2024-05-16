import React from 'react';
import Header from '../components/Header';
import Pitch from '../components/Pitch';

function Home() {
  return (
    <div className='flex justify-center flex-col'>
      <Header />
      <Pitch />
    </div>
  )
}

export default Home;