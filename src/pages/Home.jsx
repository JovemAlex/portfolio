import {
  BehanceLogo,
  CaretLeft,
  CaretRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo
} from '@phosphor-icons/react'
import About from '../Components/About'
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-6 back text-xl'>
      <div className='flex justify-center items-center h-full w-full'>

        <div>
          <a href='https://www.behance.net/alexsandrojnior' target='_blanck' rel='noreferrer' className='
            flex
            m-10
            p-5
            border-2
            border-black
            shadow-[-5px_5px_black]
            backdrop-blur-sm
            hover:shadow-[-10px_10px_black]
            transition ease-in duration-300
          '>
            <CaretLeft size={22} />
            DESIGNER
            </a>
        </div>

        <div className='
          flex
          justify-center
          items-center
          h-4/5
          w-3/5
          max-w-screen-md
          border-2
          border-black
          shadow-[-10px_10px_black]
          backdrop-blur-sm
          hover:shadow-[-20px_20px_black]
          transition ease-in duration-300
          '
        >
          <About />
        </div>

        <div>
          <a href='https://github.com/JovemAlex?tab=repositories' target='_blanck' rel='noreferrer' className='
            flex
            m-10
            p-5
            border-2
            border-black
            shadow-[-5px_5px_black]
            backdrop-blur-sm
            hover:shadow-[-10px_10px_black]
            transition ease-in duration-300
          '>
            PROJECTS
            <CaretRight size={22} />
            </a>
        </div>
      </div>

      <div className='w-full flex justify-center mb-10'>

        <nav>

          <ul className='flex'>
            <li className='
                mx-4
                border-2
                border-black
                p-2
                backdrop-blur-sm
                hover:shadow-[-5px_5px_black]
                transition ease-in duration-300
              '
            >
              <a
                href="https://github.com/jovemalex"
                target='_blank'
                rel='noreferrer'
              >
              <GithubLogo size={32} />
              </a>
            </li>
            <li className='
                mx-4
                border-2
                border-black
                p-2
                backdrop-blur-sm
                hover:shadow-[-5px_5px_black]
                transition ease-in duration-300
              '
            >
              <a
                className='
                  hover:border-2
                  hover:border-black
                  hover:shadow-[-5px_5px_black]
                  transition ease-in duration-300
                '
                href="https://www.behance.net/alexsandrojnior" target='_blank' rel='noreferrer'>
                <BehanceLogo size={32} />
              </a>
            </li>
            <li className='
                mx-4
                border-2
                border-black
                p-2
                backdrop-blur-sm
                hover:shadow-[-5px_5px_black]
                transition ease-in duration-300
              '
            >
              <a
                className='
                  hover:border-2
                  hover:border-black
                  hover:shadow-[-5px_5px_black]
                  transition ease-in duration-300
                '
                href="https://linkedin.com/in/alexhnt" target='_blank' rel='noreferrer'>
              <LinkedinLogo size={32} />
              </a>
            </li>
            <li className='
                mx-4
                border-2
                border-black
                p-2
                backdrop-blur-sm
                hover:shadow-[-5px_5px_black]
                transition ease-in duration-300
              '
            >
              <a
                className='
                  hover:border-2
                  hover:border-black
                  hover:shadow-[-5px_5px_black]
                  transition ease-in duration-300
                '
                href="mailto:alexsandroandrade.jr@gmail.com" target='_blank' rel='noreferrer'>
              <EnvelopeSimple size={32} />
              </a>
            </li>
          </ul>

        </nav>

      </div>

    </div>
  )
}

export default Home