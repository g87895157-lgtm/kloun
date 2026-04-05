import React from 'react'
import Router from './Router'
import Anime from './Anime'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Qidiruv from '../assets/Search.png'
import Login1 from '../assets/Login1.jpg'
import glavniy from '../AnimeFon/glavniy.jpg'
import Search from './Search'

const Asosiyfayl = () => {
  return (
    <div className='relative min-h-screen '>
        <img src={Login1} alt="" className='md:w-full md:h-screen '  /> <Outlet />
        <img src={glavniy} alt="Desktop Login" className=' sm:hidden sm:w-screen sm:h-screen  object-cover' />
        <div className='w-full h-20 bg-black/10 backdrop-blur-sm absolute top-0'>
         <Search />
            <img src={Qidiruv} alt="" className='w-5 h-5 absolute top-8 left-5 ' />
            
                    <Link to='/Like'>
                        <button  className='w-25 h-10 bg-blue-900/10  rounded-4xl absolute top-5 left-35 flex items-center justify-center text-amber-50 cursor-pointer md:left-180'>
                            <p>Like</p>
                        </button>
                    </Link>
                    <Link to='/Notfinished'>
                        <button className='w-45 h-10 bg-blue-900/10  rounded-4xl absolute top-5 left-210 flex items-center justify-center text-amber-50 cursor-pointer'>
                            <p>Korib tugatilinmagan </p>
                        </button>
                    </Link>
                    <Link to='/Tarix'>
                        <button className='w-25 h-10 bg-blue-900/10  rounded-4xl absolute top-5 left-260 flex items-center justify-center text-amber-50 cursor-pointer'>
                            <p>Tarix</p>
                        </button>
                    </Link>

        <Anime />
      </div>
    </div>
  )
}

export default Asosiyfayl




