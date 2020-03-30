import React, { useState, useEffect } from 'react'

const SearchContext = React.createContext()

const SearchProvider = (props) => {

    const [searchQuery, setSearch] = useState('')

    const search = param => {
        //first clear all of the local storageeeee
        localStorage.clear()
        //then store the data in JSON format
        localStorage.setItem('search-query', JSON.stringify(param))
        setSearch(param)
    }

    useEffect(() => {
        //get the data
        const query = localStorage.getItem('search-query')

        if (query && query !== JSON.stringify(searchQuery)) {
            setSearch(JSON.parse(query))
        }
    })

    return (
        <SearchContext.Provider value={{searchQuery, search}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext
export { SearchProvider }
