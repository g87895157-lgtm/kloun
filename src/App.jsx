import React, { useState } from 'react'
import Imports from '../src/routes/Imports'
import Router from './routes/Router'

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='min-h-screen w-full bg-linear-to-br from-[#02071d] to-[#3d3a3f]'>
      <Imports searchValue={searchValue} onSearchChange={setSearchValue} />
      <Router searchValue={searchValue} />
    </div>
  )
}

export default App
