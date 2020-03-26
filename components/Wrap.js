import React from 'react'
import styled from 'styled-components'

export default function Wrap(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  padding: ${({ theme }) => theme.pad};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
          padding: ${({ theme }) => theme.padMobile};
      }
  }
`