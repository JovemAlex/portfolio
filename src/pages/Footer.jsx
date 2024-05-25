import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col gap-y-4 mt-[150px] mb-[100px] items-center justify-center'>
      <h3 className='font-semibold'>Página feita com:</h3>

      <div className='w-[30px] h-[30px] gap-x-3 flex items-center justify-center'>
        <img src="https://i.ibb.co/mRJ6pdz/Rectangle-46.png" alt="" />
        <img src="https://i.ibb.co/KVnMF2K/Rectangle-43.png" alt="" />
        <img src="https://embed.zenn.studio/api/optimize-og-image/68520139b2eb61bcdf4a/https%3A%2F%2Fbradlc.gallerycdn.vsassets.io%2Fextensions%2Fbradlc%2Fvscode-tailwindcss%2F0.11.65%2F1713978907565%2FMicrosoft.VisualStudio.Services.Icons.Default" alt="" />
      </div>

      <span>© - Alexsandro Júnior - 2024</span>
    </div>
  )
}

export default Footer