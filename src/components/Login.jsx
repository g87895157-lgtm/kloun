import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img src="src/assets/Login1.jpg" alt="" className='w-full h-194' />
      <div className='w-100 h-125 bg-white/25 absolute top-30 left-210 rounded-3xl shadow-xl backdrop-blur-md  items-center '>
        <p className='text-white text-5xl  flex justify-center'>Login</p>
        <input type="text" placeholder='Username' className='w-80 h-10 rounded-3xl px-5 absolute top-40 left-10 bg-white/40' />
        <input type="text" placeholder='Password' className='w-80 h-10 rounded-4xl px-5 absolute top-60 left-10  bg-white/40 ' />
        <Link to="/Asosiy" className='w-80 h-10 bg-blue-900/90  rounded-4xl absolute top-85 left-10 flex items-center justify-center text-amber-50 '>
          <p>Login</p>
        </Link>
      </div>
      <p className='absolute top-40 left-20 text-white text-6xl'>Добро пожаловать в </p>
      <p className='absolute top-70 left-30 text-white text-6xl'>аниме фанбаза</p>
    </div>
  )
}

export default Login
