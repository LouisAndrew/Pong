import React, { useContext } from 'react'
import SearchContext from '../../hooks/SearchContext'
import SearchResult from './SearchResult'

const SRWrapper = ({ index }) => {
    const { searchQuery } = useContext(SearchContext)
    console.log(searchQuery)
    return <SearchResult />
}

export default SRWrapper
