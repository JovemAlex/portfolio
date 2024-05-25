import React from 'react';
import Card from '../components/Card';
import Buttom from '../components/btn';

function Projects() {
  return (
    <div className='flex items-center justify-center flex-col mt-20 gap-y-20' id='projects'>

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

      <a href="https://github.com/JovemAlex?tab=repositories" target='_blank' rel='noreferrer'>
        <Buttom name={'Repositórios'}/>
      </a>
    </div>
  )
}

export default Projects