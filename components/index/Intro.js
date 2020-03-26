import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'
import SvgBeer from './assets/SvgBeer'
import SvgJump from './assets/SvgJump'
import SvgTrust from './assets/SvgTrust'

export default function Intro() {

    const what = ['what', 'is', 'this', 'website?']
    const abc = ['A', 'B', 'C']
    const cards = [
        {
            svg: <SvgBeer className='svg' id='beer' />,
            text: 'we provide lots of infos about beers'
        }, 
        {
            svg: <SvgJump className='svg' id='jump' />,
            text: 'who doesn’t like beers?'
        },
        {
            svg: <SvgTrust className='svg' id='trust' />,
            text: 'i supposed to write smth bout friends here.'
        }
    ]

    return (
        <Page style={{ height: '50vh', marginTop: '2em' }}>
            <Wrap>

                <Container>
                    <Inner>
                        <div>
                            {what.map(x => <h1>{x.toUpperCase()}</h1>)}
                        </div>
                    </Inner>
                    <Inner className='low'>
                        {/* {abc.map(x => <Item className='item'></Item>)} */}
                        {cards.map(x => <Item className='item'>
                                            {x.svg}
                                            <h3>{x.text}</h3>
                                        </Item>)}
                    </Inner>
                </Container>

            </Wrap>
        </Page>
    )
}

const Item = styled.div`
  width: 100%;
  height: 28%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};

  .svg {
      height: 60%;
      width: 20%;
  }

  h3 {
      margin-left: 1rem;
  }
`

const Inner = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('center')};
  ${({ theme }) => theme.alignItems('center')};
  
  div h1 {
    font-weight: 400;
    font-size: 2.5rem;
  }

  &.low {
      ${({ theme }) => theme.flexFlow('column nowrap')};
      ${({ theme }) => theme.justifyContent('space-evenly')};
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  background-color: ${({ theme }) => theme.color};
  ${({ theme }) => theme.flex()};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
          ${({ theme }) => theme.flexFlow('column nowrap')};
      }

      .low {
          ${({ theme }) => theme.flexFlow('row nowrap')};
          ${({ theme }) => theme.justifyContent('space-evenly')};
      }

      .low > div {
          ${({ theme }) => theme.flexFlow('column nowrap')};
          ${({ theme }) => theme.justifyContent('space-evenly')};
      }

      div h1 {
          font-size: 2rem;
      }

      .svg {
          height: 30%;
          width: 50%;
      }

      .item h3 {
          margin-left: 0;
          text-align: center;
          max-width: 90%;
      }

      .item {
          height: 100%;
          width: 28%;
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {

      div h1 {
          font-size: 1.4rem;
      }

      .item h3 {
          font-size: 0.6rem;
      }
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {

      & {
          ${({ theme }) => theme.flexFlow('row nowrap')};
      }

      .low {
          ${({ theme }) => theme.flexFlow('column nowrap')};
      }

      .low > div {
          ${({ theme }) => theme.flexFlow('row nowrap')};
          ${({ theme }) => theme.justifyContent('flex-start')};
      }

      .item {
          height: 28%;
          width: 100%;
      }

      .svg {
          height: 60%;
          width: 20%;
      }

      div h1 {
          font-size: 1rem;
      }

      .item h3 {
          font-size: 0.6rem;
          margin-left: 1rem;
      }
  }
`