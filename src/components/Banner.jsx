import React from 'react'

function Banner() {
  return (
    <div className='relative h-[20vh] md:h-[75vh] bg-cover bg-center flex item-center' style={{backgroundImage : 'url("https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg")'}}>
       <div className='absolute bottom-0 w-full text-white text-2xl text-center bg-gray-900/60 p-4'>
        AVENGERS ENDGAME
      </div>

    </div>
  )
}

export default Banner;