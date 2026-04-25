import React, { useMemo, useState } from 'react'
import { getAnimeRating, saveAnimeRating } from '../utils/animeRatings'
import { getLikedAnimeIds, saveLikedAnimeIds } from '../utils/likedAnime'

// RatingStars komponenti: yulduzlar orqali baho tanlash uchun
const RatingStars = ({ ratingButtons, selectedRating, onSelectRating }) => (
  <div>
    <div className='mt-4 flex flex-wrap gap-2 text-3xl text-yellow-400'>
      {ratingButtons.map((rating) => (
        <span
          key={rating}
          role='button'
          tabIndex={0}
          onClick={() => onSelectRating(rating)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              onSelectRating(rating)
            }
          }}
          className={`cursor-pointer select-none transition ${
            Number(rating) <= Number(selectedRating)
              ? 'scale-105 opacity-100'
              : 'opacity-30 hover:opacity-70'
          }`}
          aria-label={`${rating} yulduz`}
        >
          {'\u2605'}
        </span>
      ))}
    </div>

    <p className='mt-4 text-sm text-slate-400'>
      Tanlangan baho: <span className='font-semibold text-yellow-400'>{selectedRating}</span>
    </p>
  </div>
)

// CommentLike komponenti: fikr yozish va like tugmasi uchun
const CommentLike = ({ comment, onChangeComment, isLiked, onToggleLike }) => (
  <div className='mt-6'>
    <textarea
      value={comment}
      onChange={onChangeComment}
      placeholder='Fikringizni yozing...'
      className='w-full p-3 bg-white/10 text-white rounded-lg resize-none border border-white/20 focus:border-cyan-400 focus:outline-none'
      rows={3}
    />
    <button
      onClick={onToggleLike}
      className={`mt-3 px-4 py-2 rounded-lg text-sm font-semibold transition ${
        isLiked ? 'bg-pink-600 text-white' : 'bg-white/15 text-white hover:bg-white/25'
      }`}
    >
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  </div>
)

// EpisodeLinks komponenti: 1-12 tugmalarga video havolalarini chiqaradi
const EpisodeLinks = ({ episodeButtons, videoUrl }) => (
  <div className='mt-10'>
    <p className='text-sm text-slate-300'>Epizod tanlang</p>

    <div className='mt-4 flex flex-wrap gap-2'>
      {episodeButtons.map((ep) => (
        <a
          key={ep}
          href={videoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg px-3 py-2 text-sm font-semibold transition no-underline bg-white/10 text-slate-300 hover:bg-white/20'
        >
          {ep}
        </a>
      ))}
    </div>
  </div>
)

const PropsAnime = ({
  text,
  animeId,
  defaultScore = '0.0',
  videoUrl,
  description = 'Treylerni tomosha qiling va ozingizning bahoyingizni bering.',
}) => {
  const ratingButtons = useMemo(
    () => Array.from({ length: 10 }, (_, index) => (index + 1).toString()),
    []
  )

  const episodeButtons = useMemo(
    () => Array.from({ length: 12 }, (_, index) => (index + 1).toString()),
    []
  )

  const [selectedRating, setSelectedRating] = useState(() =>
    getAnimeRating(animeId, defaultScore)
  )

  const [comment, setComment] = useState('')

  const [isLiked, setIsLiked] = useState(() => getLikedAnimeIds().includes(animeId))

  const handleRate = (rating) => {
    setSelectedRating(rating)
    saveAnimeRating(animeId, rating)
  }

  const handleToggleLike = () => {
    const currentLikes = getLikedAnimeIds()
    const newLikes = currentLikes.includes(animeId)
      ? currentLikes.filter((id) => id !== animeId)
      : [...currentLikes, animeId]

    saveLikedAnimeIds(newLikes)
    setIsLiked(!isLiked)
  }

  return (
    <div className='min-h-screen bg-[#0d1119] px-6 pb-12 pt-32'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.9fr]'>
        <div className='overflow-hidden rounded-4xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30'>
          <div className='flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3'>
            <p className='text-sm font-semibold text-slate-200'>Official Trailer</p>
            <span className='rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white'>
              YouTube
            </span>
          </div>

          <div className='p-4'>
            <div className='aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black'>
              <iframe
                src={videoUrl}
                title={`${text} trailer`}
                className='h-full w-full rounded-3xl'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className='rounded-4xl border border-white/10 bg-slate-900 p-8 text-white shadow-2xl shadow-black/30'>
          <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>Anime</p>
          <h1 className='mt-3 text-4xl font-black leading-tight'>{text}</h1>
          <p className='mt-4 text-sm leading-7 text-slate-300'>{description}</p>

          <div className='mt-10'>
            <p className='text-sm text-slate-300'>Sizning bahoyingiz</p>
            <RatingStars
              ratingButtons={ratingButtons}
              selectedRating={selectedRating}
              onSelectRating={handleRate}
            />
          </div>

          <CommentLike
            comment={comment}
            onChangeComment={(e) => setComment(e.target.value)}
            isLiked={isLiked}
            onToggleLike={handleToggleLike}
          />

          <EpisodeLinks episodeButtons={episodeButtons} videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  )
}

export default PropsAnime
