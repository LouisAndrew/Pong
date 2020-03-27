import React from 'react'
import styled from 'styled-components'

export default function Description(props) {
    return (
        <Container>
            
            <h2>Product Description:</h2>
            <h3>{props.desc} </h3>

        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  padding: 1em;

  h2 {
      font-size: 2rem;
      font-weight: 300;
  }

  h3 {
      margin-top: 1rem;
      font-size: 1.1rem;
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      h2 {
          font-size: 1.6rem;
      }

      h3 {
          font-size: 0.6rem;
      }
  }
`
