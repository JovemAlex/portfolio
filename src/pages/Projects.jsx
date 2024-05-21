import React from 'react';
import Card from '../components/Card';
import Buttom from '../components/btn';

function Projects() {
  return (
    <div className='flex items-center justify-center flex-col mt-20 gap-y-20'>

      <div>
        <h1 className='font-semibold text-5xl'>
          Projects
        </h1>
      </div>


      <div className='flex items-center justify-center gap-x-8'>
        <Card />
        <Card />
        <Card />
      </div>

      <a href="https://google.com">
        <Buttom name={'Repositórios'}/>
      </a>
    </div>
  )
}

export default Projects