import React from 'react'
import styled from 'styled-components'

export default function DShowcaseCard(props) {
    console.log(props)
    return (
        <Container big={props.big}>
            <img src={props.data.image_url} />
            <Details big={props.big}>
                <h2>{props.data.name} </h2>
                <h3>{props.data.tagline}</h3>
                <h4>First Brewed: {props.data.first_brewed} </h4>
            </Details>
        </Container>
    )
}

const Details = styled.div`
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  width: 100%;
  margin: 0 5rem;
  text-align: ${props => !props.big && 'right'};

  h2 {
      font-weight: 400;
      font-size: 2.4rem;
  }

  h3 {
      margin-top: 1rem;
      font-size: 1.3rem;
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};
  ${props => props.theme.flexFlow(props.big ? 'row nowrap' : 'row-reverse nowrap')};
  padding: 2rem;
  position: relative;

  /* img {
      height: ${props => props.big ? '110%' : '80%'};
      width: ${props => props.big ? '12%' : '20%'};
  } */

  img {
      height: ${props => props.big ? '320px' : '240px'};
      width: ${props => props.big ? '80px' : '60px'};
      /* position: absolute;
      ${props => props.big ? "left: 2em;" : "right: 2em;"}; */
  }


  /* fix resolution bugs for ipad! */
  @media only screen and ( max-width: 1050px ) {
      
      img {
        height: ${props => props.big ? '270px' : '230px'};
        width: ${props => props.big ? '70px' : '70px'};
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      img {
        height: ${props => props.big ? '220px' : '180px'};
        width: ${props => props.big ? '55px' : '50px'};
      }
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      & {
          padding: 1rem;
      }

      img {
        height: ${props => props.big ? '120px' : '80px'};
        width: ${props => props.big ? '30px' : '20px'};
      }

      div h2 {
          font-size: 1rem;
      }

      div h3 {
          font-size: 0.6rem;
      }

      div h4 {
          font-size: 0.5rem;
      }

      div {
          margin: 0 1rem;
      }
  }

  @media only screen and ( min-height: 700px ) and ${({ theme }) => theme.sizes.mobile} {

    img {
        height: ${props => props.big ? '150px' : '100px'};
        width: ${props => props.big ? '35px' : '25px'};
      }

      div h2 {
          font-size: 1.4rem;
      }

      div h3 {
          font-size: 0.8rem;
      }

      div h4 {
          font-size: 0.6rem;
      }

      div {
          margin: 0 2rem;
      }
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {

      & {
          padding: 1rem 3rem;
      }

      img {
        height: ${props => props.big ? '120px' : '80px'};
        width: ${props => props.big ? '30px' : '20px'};
      }

      div h2 {
          font-size: 1rem;
      }

      div h3 {
          font-size: 0.6rem;
      }

      div h4 {
          font-size: 0.5rem;
      }

      div {
          margin: 0 3rem;
      }
  }
`