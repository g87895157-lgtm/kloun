import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Asosiyfayl from './Asosiyfayl';
import Like from './Like';
import Login from './Login';
import Tepasi from './Tepasi';
import Tarixi from './Tarixi';
import NotFinished from './Notfinished';
import Anime from './Anime';
import SoloLeveling from '../AnimeFayl/SoloLeveling.jsx'
import DrStone from '../AnimeFayl/DrStone.jsx'
import OnePunchMan from '../AnimeFayl/OnePunchMan.jsx'
import DemonSlayer from '../AnimeFayl/DemonSlayer.jsx'
import Shield from '../AnimeFayl/Shield.jsx'
import KeeperOfSecrets from '../AnimeFayl/KeeperOfSecrets.jsx'
import Vanpis from '../AnimeFayl/Vanpis.jsx'
import HanterXHanter from '../AnimeFayl/HanterXHanter.jsx'
import Naruto from '../AnimeFayl/Naruto.jsx'

const RouterList =[
  { path: '/Asosiy/*', element: <Asosiyfayl /> },
  { path: '/Tarix', element: <Tarixi /> },
  { path: '/Notfinished', element: <NotFinished /> },
  { path: '/Like', element: <Like /> },
  { path: '/Tepasi', element: <Tepasi /> },
  { path: '/Anime', element: <Anime /> },
  { path: '/SoloLeveling', element: <SoloLeveling /> },
  { path: '/DrStone', element: <DrStone /> },
  { path: '/OnePunchMan', element: <OnePunchMan /> },
  { path: '/DemonSlayer', element: <DemonSlayer /> },
  { path: '/Shield', element: <Shield /> },
  { path: '/KeeperOfSecrets', element: <KeeperOfSecrets /> },
  { path: '/Vanpis', element: <Vanpis /> },
  { path: '/HanterXHanter', element: <HanterXHanter /> },
  { path: '/Naruto', element: <Naruto /> },
]

const Router = () => {
  return (
    <Routes>
      {RouterList.map ((route,tartib) => ( 
       <Route 
       key={tartib}
        path={route.path}
        element={route.element}
       />
      ))}



      <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default Router

