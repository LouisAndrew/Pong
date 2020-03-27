import React from 'react'
import styled from 'styled-components'

export default function Tips(props) {
    return (
        <Container>
            
            <h2>Brewing Tips</h2>
            <h4>{props.tips}</h4>

        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  padding: 1em;

  h2 {
      font-size: 2.5rem;
      font-weight: 500;
  }

  h4 {
      margin-top: 1vh;
      font-size: 1rem;
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      h2 {
          font-size: 2rem;
      }

      h4 {
          font-size: 0.8rem;
      }
  }
`