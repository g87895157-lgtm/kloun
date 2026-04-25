import React from 'react'
import Anime from './Anime'

const AnimeButtonsProps = ({ anime, isLiked, onToggleLike }) => {
  return <Anime anime={anime} isLiked={isLiked} onToggleLike={onToggleLike} />
}

export default AnimeButtonsProps
