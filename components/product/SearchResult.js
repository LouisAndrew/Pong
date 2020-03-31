import React, { useContext } from 'react'
import SearchContext from '../../hooks/SearchContext'
import Result from './Result'
import PageNavigation from './PageNavigation'
import NotFound from '../errors/NotFound'

const SearchResult = ({ index }) => {
    const searchC = useContext(SearchContext)

    const minIndex = (index - 1) * 12
    const maxIndex = index * 12
    
    const doRender = (query, minIndex) => {
        if (query.length > minIndex) {
            return true
        }
        return false
    }

    const createContent = (query, minIndex, maxIndex) => {
        const itemLength = query.length - minIndex > 12 ? 12 : query.length - minIndex
        let toReturn = new Array(itemLength)

        for (let i = minIndex, j = 0; i < maxIndex, j < itemLength; i++, j++) {
            toReturn[j] = query[i].id
        }
        return toReturn
    }

    const queryArray = Array.from(searchC.searchQuery)
    let contentArray = doRender(queryArray, minIndex) ? createContent(queryArray, minIndex, maxIndex) : false
    let content = contentArray ? 
    <>
        <Result indexes={contentArray} /> 
        <PageNavigation num={index*12} pageMax={contentArray && Math.trunc(queryArray.length / 12)} href='/products/search/[sr]' as='/products/search/sr-' numOfIndexes={contentArray && Math.trunc(queryArray.length / 12)} />
    </>
    : <NotFound />

    return (
        <div style={{ minHeight: '50vh' }}>
            {content}
        </div>
    )
}

export default SearchResult 