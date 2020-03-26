import React from 'react'
import Page from '../Page'
import styled from 'styled-components'

export default function Headline() {

    const adsText = 'Brew Your Own Beer'

    return (
        <Page style={{ height: '50vh' }}>

            <Container>
                <Case>
                  <h2>{adsText} </h2>
                  <CTA>TELL ME MORE!</CTA>
                </Case>
            </Container>

        </Page>
    )
}

const CTA = styled.button`
  background: none;
  border: 1px solid #fff;
  outline: none;
  font-size: 1.1rem;
  padding: 0.4rem;
  width: fit-content;
  color: #fff;
  margin-top: 0.5rem;
  ${({ theme }) => theme.alignSelf('flex-end')};
  transition: 0.5s;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`

const Case = styled.div`
  margin: 0 5% 5% 0;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};

  h2 {
    font-size: 2.8rem;
    color: #fff;
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  background-image: url('/static/headline-2.png');
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('flex-end')};
  ${({ theme }) => theme.justifyContent('flex-end')};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & {
        background-image: url('/static/headline-2-mobile.png');
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
    
    div h2 {
      font-size: 1.7rem;
    }

    div button {
      font-size: 0.6rem;
    }
  }
`