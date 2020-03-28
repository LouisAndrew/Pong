import React from 'react'
import styled from 'styled-components'

const DShowcaseCard = React.forwardRef((props, ref) => {
    return (
        <Container prod={props.prod} big={props.big} onClick={props.onClick} href={props.href}>
            <img src={props.data.image_url} />
            <Details prod={props.prod} big={props.big}>
                <h2>{props.data.name} </h2>
                <h3>{props.data.tagline}</h3>
                <h4>First Brewed: {props.data.first_brewed} </h4>
            </Details>
        </Container>
    )
})

export default DShowcaseCard

const Details = styled.div`
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  width: ${props => props.prod ? '50%' : '100%'};
  margin: 0 5rem;
  text-align: ${props => !props.big && 'right'};

  h2 {
      font-weight: 400;
      font-size: ${props => props.prod ? '2rem' : '3rem'};
  }

  h3 {
      margin-top: 1rem;
      font-size: 1.3rem;
  }
`

const Container = styled.a`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};
  ${props => props.theme.flexFlow(props.big ? 'row nowrap' : 'row-reverse nowrap')};
  padding: 2rem;
  position: relative;
  transition: 0.4s;
  color: #000;
  text-decoration: none;

  /* img {
      height: ${props => props.big ? '110%' : '80%'};
      width: ${props => props.big ? '12%' : '20%'};
  } */

  img {
      height: ${props => props.big ? '320px' : '240px'};
      width: ${props => props.big ? '80px' : '60px'};
      transition: 0.4s;
      /* position: absolute;
      ${props => props.big ? "left: 2em;" : "right: 2em;"}; */
  }

  div h2, div h3, div h4 {
      transition: 0.4s;

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

      /* div h2, div h3, div h4 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      } */

      div h2 {
          font-size: ${props => props.prod && '2rem'};
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

  @media only screen and ( min-width: 1920px ) {
      
      img {
        height: ${props => props.big ? '320px' : '280px'};
        width: ${props => props.big ? '80px' : '70px'};
      }

      div h2 {
          font-size: 3.2rem;
      }

      div h3 {
          font-size: 2rem;
      }

      div h4 {
          font-size: 1.8rem;
      }

      div {
          margin: 0 8rem;
      }
  }

  &:hover {
      background-color: rgba(21, 21, 21, 0.6);
  }

  &:hover div h2, &:hover div h3, &:hover div h4 {
      color: #fff;
  }

  &:hover img {
      transform: scale(1.2);
  }
`