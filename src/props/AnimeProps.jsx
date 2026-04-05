import React from 'react'
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';



const Props = ({ top, left, img, Text,h,link  }) => {
  return (
    
    <div className={`bg-indigo-950/60 backdrop-blur-md w-70 h-90 rounded-2xl absolute ${top} ${left}  `}>
      <img src={img} alt="" className={`w-full rounded-4xl ${h}`} />
        <p className='text-center text-xl/25 text-white'>
          {Text }
        </p>
      <Link to={link}>
      <button  className='bg-white/50 rounded-2xl w-full h-10 absolute top-70 text-bold text-xl'>
        Korish 
      </button>
      </Link>
    </div>
  );
};

export default Props;
