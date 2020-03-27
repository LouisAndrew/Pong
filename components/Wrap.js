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
  ${({ theme }) => theme.flex()};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
          padding: ${({ theme }) => theme.padMobile};
      }
  }

  @media only screen and ( min-width: 1920px ) {
      
      & {
          padding: 2rem 2rem;
      }
  }
`