import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'
import BrowseItem from '../cards/BrowseItem'

export default function Browse() {

    const itemDatas = [
        {
          imgUrl: 'https://live.staticflickr.com/3142/2729463236_1510ea4fff_b.jpg',
          text: 'Search Beers made With Cascade'
        },
        {
            imgUrl: 'https://p1.pxfuel.com/preview/153/400/42/wheat-beer-beer-beer-glass-foam.jpg',
            text: 'Search Beers made with Ale Yeast'
        },
        {
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/John_Sleeman_India_Pale_Ale.jpg',
            text: 'Search Beers made with Pale Malt'
        }
      ]

    return (
        <Page style={{ height: '50vh' }}>
            <Wrap>

                <Container>
                    {itemDatas.map((x, i) => <Item key={i}>
                                                <BrowseItem {...x} />
                                             </Item>)}
                </Container>

            </Wrap>
        </Page>
    )
}

const Item = styled.div`
  height: 100%;
  width: 31%;
  background-color: ${({ theme }) => theme.color};
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('space-evenly')};
  ${({ theme }) => theme.flexFlow('row wrap')};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      & > div {
          height: 45%;
          width: 45%;
      }
  }
`