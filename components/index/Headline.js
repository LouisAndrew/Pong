import React from 'react'
import Page from '../Page'
import styled from 'styled-components'

export default function Headline() {
    return (
        <Page style={{ height: '50vh' }}>

            <Container>

            </Container>

        </Page>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  background-image: url('/static/headline-2.png');

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
        background-image: url('/static/headline-2-mobile.png');
      }
  }
`