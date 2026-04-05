import React from 'react'
import { Link } from 'react-router-dom'
import Login1 from '../assets/Login1.jpg'
import Likeprops from './Likeprops'

const ButtonMap =[
  {id:1, name:'1 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-95', left:'left-205', link:'/DemonSlayer'},
  {id:2, name:'2 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-95', left:'left-237', link:'/DemonSlayer'},
  {id:3, name:'3 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-95', left:'left-269', link:'/DemonSlayer'},
  {id:4, name:'4 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-95', left:'left-301', link:'/DemonSlayer'},
  {id:5, name:'5 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-107', left:'left-205', link:'/DemonSlayer'},
  {id:6, name:'6 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-107', left:'left-237', link:'/DemonSlayer'},
  {id:7, name:'7 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-107', left:'left-269', link:'/DemonSlayer'},
  {id:8, name:'8 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-107', left:'left-301', link:'/DemonSlayer'},
  {id:9, name:'9 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-119', left:'left-205', link:'/DemonSlayer'},
  {id:10, name:'10 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-119', left:'left-237', link:'/DemonSlayer'},
  {id:11, name:'11 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-119', left:'left-269', link:'/DemonSlayer'},
  {id:12, name:'12 серия', w:'w-30', h:'h-10', bg:'bg-gray-900/90', position:'absolute', top:'top-119', left:'left-301', link:'/DemonSlayer'}
]

const TextProps = (props) => {
  return (
    <>
        
     <div>
      <img src={Login1} alt="" className='w-full h-screen' />
      <video controls className='absolute top-20 left-15 rounded-2xl w-180 h-125'>
        <source src={props.videoSrc} type="video/mp4"  />
      </video>
      <div className='w-150 h-120 bg-white/50 absolute top-32 left-200  rounded-2xl'>
       <ul className='text-2xl  m-5'>
        <li>
           Жанры :{props.text1}
        </li>
        <li>
          Темы:{props.text2}
        </li>
        <li>
          Год выпуска:{props.text3}
        </li>
        <li>
          Оригинальное название:{props.text4}
        </li>
        <li>
          Возрастной рейтинг: 18+
        </li>
       </ul>
          < Likeprops />
      <hr  className='bg-white' />
      </div>
    </div>




      {ButtonMap.map((item) => (
        <Link key={item.id} to={item.link}>
          <div
            className={`
              ${item.w} 
              ${item.h} 
              ${item.bg} 
              ${item.position} 
              ${item.top} 
              ${item.left}
              flex items-center justify-center rounded-lg text-white cursor-pointer
            `}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </>
  )
}

export default TextProps

