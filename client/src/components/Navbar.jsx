import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
function Navbar() {
    const {user}= useContext(AppContext);
    const navigate = useNavigate();
    const {logout, credit, setShowLogin} = useContext(AppContext);
  return (
    <div className='flex items-center justify-between py-4'>
        <Link to='/'> <img src={assets.logo} alt=""  className='w-28 sm:w-32 lg:w-40'/></Link>
        <div>
            {
                user?
                <div className='flex items-center gap-2 sm:gap-3'>
                    <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 cursor-pointer rounded-full transition hover:scale-105 duration-700'>
                        <img className='w-5' src={assets.credit_star} alt="" />
                        <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
                    </button>
                    <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                    <div className='group relative'>
                        <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                            <ul className='list-none bg-white m-0 p-2 rounded-md border text-sm'>
                                <li onClick={logout} className='px-2 py-1 cursor-pointer pr-10'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>:
                <div className='flex items-center gap-2 sm:gap-5'>
                    <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
                    <button onClick={()=> setShowLogin(true)} className='rounded-full cursor-pointer bg-zinc-800 text-white px-7 sm:px-10 py-2 text-sm'>Login</button>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar