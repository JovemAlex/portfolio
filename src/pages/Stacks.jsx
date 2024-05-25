import React from 'react';
import StackBadge from '../components/Badges';
import stacksArr from '../helper/stacks';

function Stacks() {
  return (
    <div className=' flex flex-col items-center justify-center bg-black mt-[100px] p-20 rounded-tr-[100px] rounded-bl-[100px]' id='stacks'>

      <h1 className='text-white font-semibold text-5xl'>Stacks</h1>

      <div className='mt-10 flex flex-wrap gap-x-[30px] gap-y-[30px] max-w-[820px] items-center justify-center'>
        { stacksArr.map((e) => (
          <StackBadge name={e.name} img={e.imgURL} alt={e.imgALT}/>
        )) }
      </div>

    </div>
  )
}

export default Stacks;