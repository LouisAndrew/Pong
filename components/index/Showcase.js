import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'

export default function Showcase() {
    return (
        <Page>
            <Wrap>

                <Container>
                    <h1>Our Finest Masterpieces</h1>
                    <Case className='case'>
                        <ItemBig className='big'></ItemBig>
                        <Item className='small'></Item>
                        <Item className='small'></Item>
                        <ItemBig className='big'></ItemBig>
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
`

