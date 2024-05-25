import React from 'react';
import contacts from '../helper/contacts';

function Contacts() {
  return (
    <div className='flex flex-col items-center justify-center bg-black mt-[100px] p-20 rounded-tr-[100px] rounded-bl-[100px] gap-y-20' id='contact'>

      <h1 className='text-white font-semibold text-5xl'>Contacts</h1>

      <div className='mt-10 flex flex-wrap gap-x-[30px] gap-y-[30px] max-w-[820px] items-center justify-center'>
        { contacts.map((e) => (
          <div className='flex items-center justify-center'>
            <a href={e.url} target='_blank' rel='noreferrer'>
              <img src={e.img} alt={e.name} className='w-[100px] h-[100]'/>
            </a>
          </div>
        )) }
      </div>

    </div>
  )
}

export default Contacts;