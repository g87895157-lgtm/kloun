import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Qidiruv from '../assets/Search.png'
import soar from './Search'

const Tepasi = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='w-full h-20 bg-black/10 backdrop-blur-sm absolute top-0'>
        <div className='h-full flex items-center justify-center sm:justify-start sm: gap-2 sm:gap-3 flex-wrap'>
          <Link to='/Like'>
            <button className='w-24 sm:w-10 h-8 sm:h-10 bg-blue-900/10 rounded-4xl flex items-center justify-center text-amber-50 cursor-pointer text-xs sm:text-sm'>
              Like
            </button>
          </Link>
          <Link to='/Notfinished'>
            <button className='w-32 sm:w-45 h-8 sm:h-10 bg-blue-900/10 rounded-4xl flex items-center justify-center text-amber-50 cursor-pointer text-xs sm:text-sm'>
              Korib tugatilinmagan
            </button>
          </Link>
          <Link to='/Tarix'>
            <button className='w-24 sm:w-25 h-8 sm:h-10 bg-blue-900 rounded-4xl flex items-center justify-center text-amber-50 cursor-pointer text-xs sm:text-sm'>
              Tarix
            </button>
          </Link>
          <button onClick={() => navigate('/Login')} className='w-24 sm:w-25 h-8 sm:h-10 bg-blue-900/10 rounded-4xl flex items-center justify-center text-amber-50 cursor-pointer text-xs sm:text-sm'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tepasi

