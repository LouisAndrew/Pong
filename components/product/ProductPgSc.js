import React from 'react'
import styled from 'styled-components'
import Wrap from '../Wrap'
import ShowcaseCard from '../cards/ShowcaseCard'

const ProductPgSc = ({ id }) => {

    const setEnd = id => {

        const maximum = id + 3
        return maximum > 325 ? 325 : maximum
    } 

    const createContent = maximum => {
        
        let toReturn = []
        for (let i = maximum-2; i <= maximum; i++) {
            const temp = <Item>
                            <ShowcaseCard beerId={i} />
                        </Item>
            toReturn = [...toReturn, temp]
        }

        return toReturn
    }

    return (
        <Wrap>

            <Container>
                {createContent(setEnd(id))}
            </Container>

        </Wrap>
    )
}

export default ProductPgSc

const Item = styled.div`
  height: 48vh;
  width: 31%;
  background-color: ${({ theme }) => theme.color};
  margin: 1vh 0;
`

const Container = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('space-between')};
  ${({ theme }) => theme.flexFlow('row wrap')};

  @media only screen and ( max-width: 1024px ) {
      
      & > div {
          width: 45%;
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      & {
          ${({ theme }) => theme.justifyContent('space-evenly')};
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      & > div {
          width: 100%;
      }
  }
`