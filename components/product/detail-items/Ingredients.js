import React from 'react'
import styled from 'styled-components'

export default function Ingredients(props) {
    const malt = props.ing.malt
    const hops = props.ing.hops
    const yeast = props.ing.yeast

    return (
        <Container>
            
            <h2>Ingredients</h2>
            <div>
                <h3>Malt:</h3>
                {malt.map((x) => <h4>{x.name} </h4>)}
                <h3>Hops:</h3>
                {hops.map(x => <h4>{x.name}</h4>)}
                <h3>Yeast: {yeast} </h3>
            </div>

        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}; 
  padding: 1em;

  h2 {
      text-align: right;
      font-size: 2.5rem;
      font-weight: 500;
  }

  h3, h4 {
      text-align: right;
  }

  h3 {
      margin-top: 1vh;
      font-weight: 400;
      font-size: 1.4rem;
  }

  h4 {
      margin-top: 0.5vh;
      font-size: 1rem;
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      h2 {
          font-size: 2rem;
      }

      h3 {
          font-size: 1rem;
      }

      h4 {
          font-size: 0.8rem;
      }
  }
`