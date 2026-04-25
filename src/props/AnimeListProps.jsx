import React from 'react'
import { Link } from 'react-router-dom'

const AnimeListProps = (props) => {
  return (
    <div>
      <Link to={props.Link} className={`${props.w} h-10 bg-[#694a7d]/10  flex items-center justify-center 
      rounded-lg text-sm font-bold text-white absolute top-11 ${props.left} hover:bg-[#694a7d]/20 transition duration-300 `}>
      <h1 className='text-indigo-50' >{props.Text}</h1>
      </Link>
    </div>
  )
}

export default AnimeListProps
