export const LIKED_ANIME_KEY = 'likedAnimeIds'

export const getLikedAnimeIds = () => {
  const savedLikes = localStorage.getItem(LIKED_ANIME_KEY)
  return savedLikes ? JSON.parse(savedLikes) : []
}

export const saveLikedAnimeIds = (ids) => {
  localStorage.setItem(LIKED_ANIME_KEY, JSON.stringify(ids))
}
