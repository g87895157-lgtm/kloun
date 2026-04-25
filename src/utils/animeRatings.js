const STORAGE_KEY = 'anime-ratings'

const getRatingsMap = () => {
  if (typeof window === 'undefined') {
    return {}
  }

  const savedRatings = window.localStorage.getItem(STORAGE_KEY)

  if (!savedRatings) {
    return {}
  }

  try {
    return JSON.parse(savedRatings)
  } catch {
    return {}
  }
}

const saveRatingsMap = (ratingsMap) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ratingsMap))
}

export const getAnimeRating = (animeId, defaultScore) => {
  const ratingsMap = getRatingsMap()

  return ratingsMap[animeId] ?? defaultScore
}

export const saveAnimeRating = (animeId, score) => {
  const ratingsMap = getRatingsMap()

  ratingsMap[animeId] = score
  saveRatingsMap(ratingsMap)
}
