import React from 'react'
import AnimeList from '../components/AnimeList'
import Search from '../components/Search'

const Imports = ({ searchValue, onSearchChange }) => {
  return (
    <div>
      <Search searchValue={searchValue} onSearchChange={onSearchChange} />
      <AnimeList />

    </div>
  )
}

export default Imports
