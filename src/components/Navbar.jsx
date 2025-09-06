import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img
        className='w-[50px]'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmivllBmBOeORKy1WxSVaNUPvv0hiaV-ppM6I_w0r4k2HYgLpcuHiQQlE2xWvpuaOh5U&usqp=CAU"
        alt="Logo"
      />

      <Link to="/" className='text-blue-600 text-3xl font-bold'>Home</Link>
      <Link to="/watchlist" className='text-blue-600 text-3xl font-bold'>WatchList</Link>
    </div>
  );
};

export default Navbar;
