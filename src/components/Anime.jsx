import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import AnimeProps from '../props/AnimeProps'
import SoloLevelingImg from '../AnimeFon/SoloLeveling.jpg'
import DrStoneImg from '../AnimeFon/DrStone.png'
import OnePunchManImg from '../AnimeFon/OnePunchMan.jpg'
import DemonSlayerImg from '../AnimeFon/DemonSlayer.jpg'
import ShieldImg from '../AnimeFon/Shield.jpg'
import KeeperOfSecretsImg from '../AnimeFon/Keeper of secrets.jpg'
import VanpisImg from '../AnimeFon/Vanpis.jpg'
import HanterXHanterImg from '../AnimeFon/HanterXHanter.jpg'
import NarutoImg from '../AnimeFon/Naruto.jpg'



const Anime = () => {
    return (
    <div>
      <div className=' w-300 h-160 absolute top-25 left-30 overflow-y-auto rounded-3xl '>
      {AnimeList.map((qisqa, index)=> (
        <AnimeProps
          key={index}
          top={qisqa.top}
          left={qisqa.left}
          img={qisqa.img}
          Text={qisqa.text}
          link={qisqa.link}
        />
      ))}
      </div>
    </div>
  )
}
export default Anime




const AnimeList = [
  { id: 1, img: SoloLevelingImg, text: "Solo Leveling", top: "top-25", left: "left-30",link: "/SoloLeveling" },
  { id: 2, img: DrStoneImg, text: "Doctor Stone", top: "top-25", left: "left-120", link: "/DrStone" },
  { id: 3, img: OnePunchManImg, text: "One Punch Man", top: "top-25", left: "left-210", link: "/OnePunchMan" },
  { id: 4, img: DemonSlayerImg, text: "Demon Slayer", top: "top-120", left: "left-30", link: "/DemonSlayer" },
  { id: 5, img: ShieldImg, text: "Shield", top: "top-120", left: "left-120", link: "/Shield" },
  { id: 6, img: KeeperOfSecretsImg, text: "Keeper of Secrets", top: "top-120", left: "left-210", link: "/KeeperOfSecrets"  },
  { id: 7, img: VanpisImg, text: "Vanpis", top: "top-215", left: "left-30", link: "/Vanpis" },
  { id: 8, img: HanterXHanterImg, text: "Hanter X Hanter", top: "top-215", left: "left-120", link: "/HanterXHanter" },
  { id: 9, img: NarutoImg, text: "Naruto", top: "top-215", left: "left-210", link: "/Naruto" }
]




