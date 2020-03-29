import React from 'react'
import styled from 'styled-components'

export default function BrowseItem(props) {
    return (
        <Container imgUrl={props.imgUrl}>

            <div>
                <h3>{props.text}</h3>
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
      color: #fff;
  }

  html.no-touch & div h3 {
      width: 60%;
      color: #fff;
      opacity: 0.7;
      transition: 0.5s;
      text-align: center;
      font-weight: 400;
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
       }
   }

   @media only screen and ${({ theme }) => theme.sizes.mobile} {
       
       h3 {
           font-size: 0.7rem;
       }
   }
`