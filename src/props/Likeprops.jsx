import React, { useState, useEffect } from 'react'

const Likeprops = () => {

  const [rating, setRating] = useState(0)

  // load (saqlanganni olish)
  useEffect(() => {
    const saved = localStorage.getItem('rating')
    if (saved) {
      setRating(JSON.parse(saved))
    }
  }, [])

  // bosilganda
  const handleRating = (value) => {
    setRating(value)
    localStorage.setItem('rating', JSON.stringify(value))
  }

  return (
    <div>
      {[1,2,3,4,5,6,7,8,9].map((star) => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          style={{
            color: star <= rating ? 'gold' : 'gray',
            margin: '8px',
            fontSize: '30px',
            cursor: 'pointer'
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Likeprops