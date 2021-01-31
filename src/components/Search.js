import React from 'react'
import Container from './Container'

const Search = ({searchTerm}) => (
    <div>
        <h2>{searchTerm} images </h2>
        <Container searchTerm={searchTerm} />
    </div>
)

export default Search
