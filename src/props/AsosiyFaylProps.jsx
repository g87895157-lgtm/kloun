import React from 'react'
import { Link } from 'react-router-dom'

const AsosiyfaylProps = (link,left,text ) => {
  return (
    <div>
       <Link to={link}>
        <button  className={`w-25 h-10 bg-blue-900/10  rounded-4xl absolute top-5 ${left }flex items-center justify-center text-amber-50 cursor-pointer`}>
          <p>{text}</p>
        </button>
       </Link>
    </div>
  )
}

export default AsosiyfaylProps

