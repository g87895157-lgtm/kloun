import React from 'react'
import TextProps from '../props/TextProps.jsx'
import vddemon from '../TreylerAnime/vddemon.mp4'
import { Link } from 'react-router-dom' 



const DemonSlayer = () => {
  return (
    <div>
     
      <TextProps videoSrc={vddemon} />
      
    </div>
  )
}

export default DemonSlayer

