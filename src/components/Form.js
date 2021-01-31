import React, { useState } from 'react'

const Form = ({ handleSubmit, history }) => {
    const [searchEntry, setSearchEntry] = useState('')
    const updateSearchEntry = e => {
        setSearchEntry(e.target.value)
    }

    return (
        <form className="search-form" onSubmit={e => handleSubmit(e, history, searchEntry)}>
            <input
                type="search"
                name="Search"
                value={searchEntry}
                placeholder="Search..."
                onChange={updateSearchEntry}
            />

            <button
                type="submit"
                className={`search-button ${searchEntry.trim() ? "active" : null}`}
                disabled={!searchEntry.trim()}
            > Search </button>
        </form>
    )
}

export default Form