import { FileArrowDown } from '@phosphor-icons/react';
import React from 'react';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div className='
        flex
        flex-col
        items-center
        gap-y-5
      '
    >
      <h1 className='text-4xl font-bold'>Alexsandro Andrade</h1>

      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Desenvolvedor Web Full-Stack!')
            .pauseFor(2500)
            .deleteChars(25)
            .typeString('igner Gráfico!')
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />

      <p className='text-center my-4 w-1/2 font-medium'>Recém formado em Desenvolvimento Web com experiência de 2 anos integral como Designer Gráfico Freelancer.</p>

      <div className='flex flex-col items-center'>
        <h3 className='font-semibold'>Algumas Habilidades:</h3>
        <ul className='flex'>
          <div className='mx-3 mt-2 font-medium'>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>Adobe InDesign</li>
          </div>
          <div className='mx-3 mt-2 font-medium'>
            <li>MERN Stack</li>
            <li>JavaScript/TypeScript</li>
            <li>APIs RESTful</li>
            <li>Testes</li>
          </div>
        </ul>
      </div>

      <a
        href="https://drive.google.com/file/d/1mv3R_Y1lNVY6wkZfIpjHwwZtno5vIICv/view"
        target="_blank"
        rel="noopener noreferrer"
        className='
          flex
          items-center
          justify-center
          p-2
          mt-20
          border-2
          border-black
          hover:shadow-[-5px_5px_black]
          transition ease-in duration-300
        '
      >
        <FileArrowDown size={32} />
        Saiba mais sobre mim!
      </a>
    </div>
  )
}

export default About;