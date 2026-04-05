import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("");
    const animes = [
  "Naruto",
  "One Piece",
  "Attack on Titan",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "Death Note",
  "Tokyo Ghoul",
  "Bleach",
  "Dragon Ball",
  "Chainsaw Man",
  "Solo Leveling",
  "Black Clover",
  "My Hero Academia",
  "Fullmetal Alchemist",
  "Hunter x Hunter"
];

 const filteredAnimes = animes.filter((anime) =>
    anime.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div> 
        <input
        type="search"
        placeholder="Anime qidir..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-30  h-10 absolute top-5 left-3 px-13 rounded-4xl text-amber-50 sm:w-100 sm:px-13 md:reletive md:left-70 md:top-[-200]  md:rounded-3xl bg-blue-900/10"
      />
    </div>
  )
}

export default Search

