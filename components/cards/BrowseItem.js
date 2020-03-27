import React from 'react'
import styled from 'styled-components'

export default function BrowseItem(props) {
    return (
        <Container imgUrl={props.imgUrl}>

            <div>
                <h2>{props.text}</h2>
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

  div h2 {
      width: 60%;
      color: #fff;
      opacity: 0.7;
      transition: 0.5s;
      text-align: center;
      font-weight: 400;
  }
  
  &>div {
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.flex()};
      ${({ theme }) => theme.justifyContent('center')};
      ${({ theme }) => theme.alignItems('center')};
      background-color: rgba(21, 21, 21, 0);
      position: absolute;
      top: 0;
      transition: 0.5s;
  }

  & > div:hover {
      background-color: rgba(21, 21, 21, 0.6);
      cursor: pointer;
  }

  & > div:hover h2 {
      opacity: 1;
  }

   @media only screen and ${({ theme }) => theme.sizes.tablet} {
       
       h2 {
           font-size: 0.8rem;
           bottom: 1rem;
       }
   }
`