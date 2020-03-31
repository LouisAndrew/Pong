import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'
import ShowcaseCard from '../cards/ShowcaseCard'
import anime from 'animejs/lib/anime.min.js'

export default function Showcase() {

    useEffect(() => {
        
        const anim = anime({
            targets: '.showcase',
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 1000,
            autoplay: false
        })

        const observer = new IntersectionObserver(entries => {

            if (entries[0].isIntersecting) {
                console.log('is intersecting')
                console.log(entries[0].intersectionRatio)
                anim.seek(anim.duration * (entries[0].intersectionRatio - 0.2) * 1.2)
            }
        }, { threshold: [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6] })
        observer.observe(document.getElementById('sc'))
    })

    return (
        <Page>
            <Wrap>

                <Container id='sc'>
                    <h1>Our Finest Masterpieces</h1>
                    <Case className='case'>
                        <ItemBig className='big showcase'>
                              <ShowcaseCard headline right beerId='12' />
                        </ItemBig>
                        <Item className='small showcase'>
                              <ShowcaseCard headline beerId='49' />
                        </Item>
                        <Item className='small showcase'>
                              <ShowcaseCard headline right beerId='31' />
                        </Item>
                        <ItemBig className='big showcase'>
                            <ShowcaseCard headline big beerId='52' />
                        </ItemBig>
                    </Case>
                </Container>

            </Wrap>
        </Page>
    )
}

const Item = styled.div`
  height: 48%;
  width: 38%;
  background-color: ${({ theme }) => theme.color};
  transition: 0.3s;
`

const ItemBig = styled(Item)`
  width: 60%;
`

const Case = styled.div`
  height: 90%;
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('row wrap')};
  ${({ theme }) => theme.justifyContent('space-between')};
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}; 
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.justifyContent('center')};

  h1 {
    font-size: 2rem;
    margin-bottom: 2vh;
  }

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      

      .big {
        width: 100%;
        height: 32%;
      }

      .small {
          width: 49%;
          height: 32%;
      }
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {

      .big {
        width: 60%;
        height: 48%;
      }

      .small {
        width: 38%;
        height: 48%;
      }
  }
`

