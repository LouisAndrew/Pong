import React, { useState } from 'react'
import Wrap from '../Wrap'
import styled from 'styled-components'
import ShowcaseCard from '../cards/ShowcaseCard'

const Result = props => {
    
    let content = []
    const firstIndex = props.indexes[0]
    const numOfItems = props.indexes[1] - firstIndex + 2
    console.log(numOfItems)
    for (let i = firstIndex; i < numOfItems; i++) {
        const temp = <Item>
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
  width: 48%;
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
`