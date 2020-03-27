import React from 'react'
import styled from 'styled-components'
import Description from './detail-items/Description'
import Ingredients from './detail-items/Ingredients'
import Tips from './detail-items/Tips'
import Addit from './detail-items/Addit'

export default function Details(props) {
    return (
        <Container>
            
            <Wrap>
                <Items className='itm'>
                    <Description desc={props.description} />
                </Items>
                <Items style={{ height: 'fit-content' }} className='itm'>
                    <Ingredients ing={props.ingredients} />
                </Items>
                <Items className='itm'>
                    <Tips tips={props.brewers_tips} />
                </Items>
                <Items className='itm'>
                    <Addit info={{ ibu: props.ibu, abv: props.abv, atl: props.attenuation_level }} />
                </Items>
            </Wrap>

        </Container>
    )
}

const Items = styled.div`
  width: 50%;
  padding: 2vh 1vw;
`

const Wrap = styled.div`
  background-color: #DDCAB4;
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('row wrap')};
  padding: ${({ theme }) => theme.pad};
`

const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.pad};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {

      &>div, & {
          padding: ${({ theme }) => theme.padMobile};
      }
      
      .itm {
          width: 100%;
      }
  }
`