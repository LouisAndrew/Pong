import React, { useState } from 'react'
import Wrap from '../Wrap'
import styled from 'styled-components'
import ShowcaseCard from '../cards/ShowcaseCard'

const Result = props => {
    
    let content = []
    const firstIndex = props.indexes[0]
    let lastIndex = props.indexes[1] > 325 ? 325 : props.indexes[1]

    const numOfItems = lastIndex - firstIndex + 1
    
    for (let i = firstIndex; i < numOfItems + firstIndex; i++) {
        const temp = <Item className='result-item'>
                        <ShowcaseCard prod beerId={i} />
                     </Item>
        content = [...content, temp]
    }

    return (
        <>
            <Wrap style={{ marginTop: '8vh' }}>
                <Container>
                    <Case>
                        {content}
                    </Case>
                </Container>
            </Wrap>
        </>
    )
}

export default Result

const Item = styled.div`
  height: 48vh;
  width: 32%;
  background-color: ${({ theme }) => theme.color};
`

const ItemBig = styled(Item)`
  width: 60%;
`

const Case = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('row wrap')};
  ${({ theme }) => theme.alignItems('center')};
  ${({ theme }) => theme.justifyContent('space-evenly')};
  padding: 2vh;
`

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
    
      .result-item {
        width: 49%;
      }
  }
`