import React from 'react'
import styled from 'styled-components'

export default function BrowseItem(props) {
    console.log(props)
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
      position: absolute;
      right: 3rem;
      bottom: 3rem;
      color: #fff;
      opacity: 0;
      transition: 0.5s;
  }
  
  &>div {
      ${({ theme }) => theme.fitContainer()};
      background-color: rgba(21, 21, 21, 0.6);
      position: absolute;
      top: 0;
      opacity: 0;
      transition: 0.5s;
  }

  &>div:hover {
      opacity: 1;
      z-index: 2;
  }

  &>div:hover h2 {
    opacity: 1;
  }
`