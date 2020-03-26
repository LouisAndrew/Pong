import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'
import ShowcaseCard from '../cards/ShowcaseCard'

export default function Showcase() {
    return (
        <Page>
            <Wrap>

                <Container>
                    <h1>Our Finest Masterpieces</h1>
                    <Case className='case'>
                        <ItemBig className='big'>
                            <ShowcaseCard big beerId='12' />
                        </ItemBig>
                        <Item className='small'>
                            <ShowcaseCard beerId='49' />
                        </Item>
                        <Item className='small'>
                            <ShowcaseCard beerId='31' />
                        </Item>
                        <ItemBig className='big'>
                            <ShowcaseCard big beerId='52' />
                        </ItemBig>
                    </Case>
                </Container>

            </Wrap>
        </Page>
    )
}

const Item = styled.div`
  height: 48%;
  width: 38%;
  background-color: ${({ theme }) => theme.color};
`

const ItemBig = styled(Item)`
  width: 60%;
`

const Case = styled.div`
  height: 90%;
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('row wrap')};
  ${({ theme }) => theme.justifyContent('space-between')};
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}; 
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.justifyContent('space-between')};

  h1 {
    font-size: 2rem;
  }

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      

      .big {
        width: 100%;
        height: 32%;
      }

      .small {
          width: 49%;
          height: 32%;
      }
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {

      .big {
        width: 60%;
        height: 48%;
      }

      .small {
        width: 38%;
        height: 48%;
      }
  }
`

