import React from 'react'
import { Link } from 'react-router-dom'
import Evaluation from './Evaluation'
import { getAnimeRating } from '../utils/animeRatings'

const Anime = ({ anime, isLiked, onToggleLike }) => {
  const { id, title, img, link, score, episodes, synopsis } = anime
  const currentScore = getAnimeRating(id, score)

  const infoItems = [
    episodes,
  ].filter(Boolean)

  return (
    <div className='relative flex w-full max-w-[16rem] flex-col overflow-hidden rounded-3xl bg-gray-500/40 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-500/50'>
      <Link to={link} className='flex h-full flex-col'>
        {img ? (
          <img src={img} alt={title} className='h-4/5 w-full object-cover' />
        ) : (
          <div className='flex h-4/5 w-full items-center justify-center  from-slate-800 via-slate-900 to-black px-6 text-center'>
            <span className='text-2xl font-bold text-slate-200'>{title}</span>
          </div>
        )}
        <Evaluation score={currentScore} />

        <div className='flex flex-1 flex-col justify-between px-5 py-4'>
          <h1 className='pr-16 text-xl font-semibold'>{title}</h1>

          <div className='mt-3 flex flex-col gap-1 text-sm text-slate-300'>
            {infoItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </Link>

      {onToggleLike && (
        <button
          type='button'
          onClick={() => onToggleLike(id)}
          className={`absolute bottom-4 right-4 rounded-full px-4 py-2 text-sm font-semibold transition ${
            isLiked
              ? 'bg-pink-600 text-white hover:bg-pink-500'
              : 'bg-white/15 text-white hover:bg-white/25'
          }`}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      )}
    </div>
  )
}

export default Anime
