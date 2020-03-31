import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchContext from '../../hooks/SearchContext'

export default function BrowseItem({ imgUrl, text, link }) {

    const searchC = useContext(SearchContext)
    const searchItem = async(param) => {
        const rq = await fetch(`https://api.punkapi.com/v2/beers?${param}`)
        const rsp = await rq.ok ? rq.json() : false
        return rsp
    }

    const itemClick = async() => {

        const data = await searchItem(link)
        if (data && data.length > 0) {
            searchC.search(data)
        }
        document.location.href = '/products/search/sr-1'
    }

    return (
        <Container onClick={itemClick} imgUrl={imgUrl}>

            <div>
                <h3>{text}</h3>
            </div>
        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}; 
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  & div h3 {
      opacity: 1;
      transition: 0.5s;
      text-align: center;
      font-weight: 400;
      width: 60%;
      color: #fff;
  }

  html.no-touch & div h3 {
      opacity: 0.7;
  }
  
  & > div {
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.flex()};
      ${({ theme }) => theme.justifyContent('center')};
      ${({ theme }) => theme.alignItems('center')};
      background-color: rgba(21, 21, 21, 0.6);
      position: absolute;
      top: 0;
      transition: 0.5s;
  }

  html.no-touch & > div {
      background-color: rgba(21, 21, 21, 0);
  }

  html.no-touch & > div:hover {
      background-color: rgba(21, 21, 21, 0.6);
      cursor: pointer;
  }

  html.no-touch & > div:hover h3 {
      opacity: 1;
  }

   @media only screen and ${({ theme }) => theme.sizes.tablet} {
       
       h3 {
           bottom: 1rem;
           font-size: 1.3rem;
       }
   }

   @media only screen and ${({ theme }) => theme.sizes.mobile} {
       
       h3 {
           font-size: 0.7rem;
       }
   }
`