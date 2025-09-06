import React from 'react'
import Movies from './Movies';

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 p-5 mt-6 flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer hover:scale-200'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
        
        
    </div>
  )
}

export default Pagination;