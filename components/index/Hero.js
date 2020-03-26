import React from 'react'
import styled from 'styled-components'
import Page from '../Page'

export default function Hero() {

    const main = 'Beer, Mate?'
    const sub = 'explore our enormous collections of beer.'

    return (
        <Page>
            <Container>
                <Words>
                    <h1>{main}</h1>
                    <h3>{sub}</h3>
                </Words>
            </Container>
        </Page>
    )
}

const Words = styled.div`
  height: 25%;
  width: 40%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.alignItems('flex-start')};
  color: #fff;

  h1 {
      font-size: 3rem;
  }

  h3 {
      margin-top: 0.5rem;
      font-size: 1.3rem;
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('flex-end')};
  ${({ theme }) => theme.alignItems('flex-end')};

  background-image: url('/static/hero.png');
  background-position: center;
  background-size: cover;

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
          background-image: url(/static/hero-mobile.png);
          ${({ theme }) => theme.justifyContent('center')};
          ${({ theme }) => theme.alignItems('center')};
      }

      div {
          ${({ theme }) => theme.justifyContent('center')};
          ${({ theme }) => theme.alignItems('center')};
      }

      h1, h3 {
          text-align: center;
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {

      div {
          width: 50%;
      }

      h1 {
          font-size: 2.2rem;
      }

      h3 {
          font-size: 0.8rem;
      }
  }
`