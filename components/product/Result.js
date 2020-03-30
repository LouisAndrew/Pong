import React, { useContext } from 'react'
import Wrap from '../Wrap'
import styled from 'styled-components'
import ShowcaseCard from '../cards/ShowcaseCard'

const Result = ({ indexes }) => {
  console.log(indexes)
    
    let content = indexes.map((x, i) => (
      <Item className='result-item' key={i}>
          <ShowcaseCard prod beerId={x} />
      </Item>
    ))

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
  background-color: ${({ theme }) => theme.colorTransparent};
  margin: 1vh 0;
`

const ItemBig = styled(Item)`
  width: 60%;
`

const Case = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('row wrap')};
  ${({ theme }) => theme.alignItems('center')};
  ${({ theme }) => theme.justifyContent('space-evenly')};
  padding: 2vh;
`

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color};

  /* two items on tablet. */
  @media only screen and (max-width: 1024px) {

      & {
        padding: 1vh;
      }
    
      .result-item {
        width: 48%;
        height: 30vh;
        padding: 1vh;
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
    
      .result-item {
        width: 100%;
      }
  }
`