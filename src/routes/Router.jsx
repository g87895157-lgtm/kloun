import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Barchasi from '../AnimeList/Barchasi'
import KoribTugatilmagan from '../AnimeList/KoribTugatilmagan'
import Like from '../AnimeList/Like'
import Tarix from '../AnimeList/Tarix'
import AtackotTitan from '../AnimeButtons/AtackotTitan'
import DemonSlayer from '../AnimeButtons/DemonSlayer'
import DoctorStoun from '../AnimeButtons/DoctorStoun'
import HanterXHanter from '../AnimeButtons/Hanter X hanter'
import JujutsuKaysen from '../AnimeButtons/JujutsuKaysen'
import SoloLevling from '../AnimeButtons/SoloLevling'



const Router = ({ searchValue }) => {
  const AnimeRouter =[
    {id:1, Link:"/Barchasi", element:<Barchasi searchValue={searchValue} />},
    {id:2, Link:"/Like", element:<Like searchValue={searchValue} />},
    {id:3, Link:"/KoribTugatilmagan", element:<KoribTugatilmagan />},
    {id:4, Link:"/Tarix", element:<Tarix />},
    {id:5, Link:"/AtackotTitan", element:<AtackotTitan />},
    {id:6, Link:"/DemonSlayer", element:<DemonSlayer />},
    {id:7, Link:"/DoctorStoun", element:<DoctorStoun />},
    {id:8, Link:"/HanterXHanter", element:<HanterXHanter />},
    {id:9, Link:"/JujutsuKaysen", element:<JujutsuKaysen />},
    {id:10, Link:"/SoloLevling", element:<SoloLevling />},
  ]
  return (
    <>
      <Routes>
        <Route path="/" element={<Barchasi searchValue={searchValue} />} />
        {AnimeRouter.map((item) => (
          <Route key={item.id} path={item.Link} element={item.element} />
        ))}
      </Routes>
    </>
  )
}

export default Router
