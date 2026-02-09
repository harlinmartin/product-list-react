import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <input 
    type="text"
    placeholder='Seach products'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className='w-full mt-4 p-2 border rounded-md'
    />
  )
}

export default SearchBar