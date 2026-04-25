import React, { useEffect, useState } from 'react'
import AnimeButtonsProps from '../props/AnimeButtonsProps'
import animeData from '../data/animeData'
import { getLikedAnimeIds, saveLikedAnimeIds } from '../utils/likedAnime'

const Like = ({ searchValue = '' }) => {
  const [likedIds, setLikedIds] = useState([])
  const normalizedSearch = searchValue.trim().toLowerCase()

  useEffect(() => {
    setLikedIds(getLikedAnimeIds())
  }, [])

  const handleToggleLike = (id) => {
    const nextLikedIds = likedIds.filter((likedId) => likedId !== id)
    setLikedIds(nextLikedIds)
    saveLikedAnimeIds(nextLikedIds)
  }

  const likedAnime = animeData.filter(
    (anime) =>
      likedIds.includes(anime.id) &&
      anime.title.toLowerCase().includes(normalizedSearch)
  )

  return (
    <div className='mx-auto max-w-6xl px-6 pb-12 pt-40'>
      {likedAnime.length > 0 ? (
        <div className='grid grid-cols-3 gap-8'>
          {likedAnime.map((anime) => (
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
          {searchValue ? 'Qidiruvga mos like anime topilmadi' : 'Hali like bosilgan anime yo&apos;q'}
        </div>
      )}
    </div>
  )
}

export default Like
