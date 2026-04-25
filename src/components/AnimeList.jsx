import React from 'react'
import Barchasi from '../AnimeList/Barchasi'
import KoribTugatilmagan from '../AnimeList/KoribTugatilmagan'
import Like from '../AnimeList/Like'
import Tarix from '../AnimeList/Tarix'
import AnimeListProps from '../props/AnimeListProps'

const AnimeList = () => {
  return (
    <div>
      <AnimeListProps Link="/Barchasi" Text="Barchasi" w="w-32" left='left-150 ' />
      <AnimeListProps Link="/Like" Text="Like" w="w-32" left='left-185' />
      <AnimeListProps Link="/KoribTugatilmagan" Text="Korib Tugatilmagan" w="w-37" left='left-220' />
      <AnimeListProps Link="/Tarix" Text="Tarix" w="w-32" left='left-260' />
    </div>
  )
}

export default AnimeList