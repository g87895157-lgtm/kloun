import React, { useState } from 'react'
import AnimeButtonsProps from '../props/AnimeButtonsProps'
import animeData from '../data/animeData'
import { getLikedAnimeIds, saveLikedAnimeIds } from '../utils/likedAnime'

const Barchasi = ({ searchValue = '' }) => {
  const [likedIds, setLikedIds] = useState(() => getLikedAnimeIds())
  const normalizedSearch = searchValue.trim().toLowerCase()

  const handleToggleLike = (id) => {
    const nextLikedIds = likedIds.includes(id)
      ? likedIds.filter((likedId) => likedId !== id)
      : [...likedIds, id]

    setLikedIds(nextLikedIds)
    saveLikedAnimeIds(nextLikedIds)
  }

  const filteredAnime = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(normalizedSearch)
  )

  return (
    <div className='mx-auto max-w-6xl px-6 pb-12 pt-40'>
      {filteredAnime.length > 0 ? (
        <div className='grid grid-cols-3 gap-8'>
          {filteredAnime.map((anime) => (
            <AnimeButtonsProps
              key={anime.id}
              anime={anime}
              isLiked={likedIds.includes(anime.id)}
              onToggleLike={handleToggleLike}
            />
          ))}
        </div>
      ) : (
        <div className='rounded-3xl bg-white/5 p-8 text-center text-white'>
          Bunday anime topilmadi
        </div>
      )}
    </div>
  )
}

export default Barchasi
