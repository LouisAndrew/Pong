import React from 'react'
import styled from 'styled-components'

const ProductCard = React.forwardRef((props, ref) => {

    const { image_url, name, tagline } = props.data

    return (
        <Container right={props.right} headline={props.headline} onClick={props.onClick} href={props.href}>
            <img src={image_url} />
            <Details right={props.right} headline={props.headline} name={name}>
                <h3>{name}</h3>
                <h5>{tagline}</h5>
            </Details>
        </Container>
    )
})

export default ProductCard

const Details = styled.div`
  margin: 0 ${props => props.headline ? '5vh' : '3vh'};
  width: ${props => props.name.length > 20 ? '50%' : '80%'};
  color: #000;
  ${props => props.right && 'text-align: right'};

  h3 {
      ${props => props.name.length > 20 && `
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      `};
      font-weight: 300;
      font-size: ${props => props.headline && '2.5rem'};
  }
`

const Container = styled.a`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};
  ${props => props.right && props.theme.flexFlow('row-reverse nowrap')};
  padding: 2vh;
  text-decoration: none;
  transition: 0.5s;

  img {
      height: ${props => props.headline ? '90%' : '70%'};
  }

  html.no-touch &:hover {
      background-color: rgba(21, 21, 21, 0.6);
  }

  html.no-touch &:hover div {
      color: #fff;
  }

  &:active {
    background-color: rgba(21, 21, 21, 0.6);
  }

  &:active div {
      color: #fff;
  }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {
      
      img {
          height: 80%;
      }

      h3 {
          font-size: ${props => props.headline && '1.5rem'};
      }

      & > div {
           margin: 0 ${props => props.headline ? '2vh' : '3vh'};
      }
  }
`