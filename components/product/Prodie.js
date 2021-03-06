import React from 'react'
import Page from '../Page'
import Wrap from '../Wrap'
import styled from 'styled-components'
import BreadCrumbs from './BreadCrumbs'

export default function Prodie(props) {

    return (
        <Page>
            <Wrap style={{ paddingBottom: 0 }}>

                <Container>
                    <BreadCrumbs {...props} />
                    <Inner>
                        <img src={props.image_url} />
                        <div className='det'>
                            <h1>{props.name}</h1>
                            <h3>{props.tagline} </h3>
                            {/* <CTA className='cta'>
                                <h4>price: 1$</h4>
                                <div>
                                    <Buy>Buy Now</Buy>
                                    <Cart>Add To Cart</Cart>
                                </div>
                            </CTA> */}
                        </div>
                    </Inner>
                </Container>

            </Wrap>
        </Page>
    )
}

const Buy = styled.button`
  padding: 0.8rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: red;
  border: none;
  outline: none;
  font-weight: 200;
`

const Cart = styled(Buy)`
  background-color: olive;
`

const CTA = styled.div`
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  margin-top: 10%;

  div {
      ${({ theme }) => theme.flex()};
  }

  h4 {
      font-size: 1.8rem;
      margin-bottom: 1vh;
  }
`

const Inner = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.alignItems('center')};
  ${({ theme }) => theme.justifyContent('center')};
  padding: 0 10%;
  position: relative;

  img {
      height: 80%;
  }

  .det {
      margin: 0 5rem;
  }

  h1 {
      font-size: 5rem;
  }

  h3 {
      font-size: 2.5rem;
  }
`

const Container = styled.div`
  height: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.color};
  ${({ theme }) => theme.alignSelf('flex-end')};
  padding: 2vh;

  @media only screen and ( max-width: 1024px ) {

      div h1 {
          font-size: 4rem;
      }

      div h3 {
          font-size: 2rem;
      }

      div img {
          height: 70%;
      }

      .cta {
          bottom: 5%;
      }

      .cta h4 {
          font-size: 1.5rem;
      }

      .cta button {
          font-size: 1rem;
          margin-right: 1rem;
          padding: 0.6rem;
      }
   }

  @media only screen and ${({ theme }) => theme.sizes.mobile} {

      .det {
          margin: 0 2rem;
      }
      
      div h1 {
          font-size: 2rem;
      }

      div h3 {
          font-size: 0.8rem;
      }

      div img {
          max-width: 60%;
          height: 60%;
          max-height: 60%;
      }

      .cta h4 {
          font-size: 1rem;
      }

      .cta button {
          font-size: 0.5rem;
      }
  }

  @media only screen and ( orientation: landscape ) and ( max-width: 850px ) {

      div h1 {
          font-size: 2.3rem;
      }

      div h3 {
          font-size: 1rem;
      }

      .cta {
          bottom: 1%;
      }

      .cta h4 {
          font-size: 0.6rem;
      }

      .cta button {
          font-size: 0.2rem;
      }
  }
`