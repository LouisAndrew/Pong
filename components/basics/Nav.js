import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

export default function Nav() {

    useEffect(() => {
        let prevScroll = window.pageYOffset
        const nav = document.getElementById('nav')
        window.onscroll = () => {
            const scroll = window.pageYOffset
            if (prevScroll > scroll) {
                nav.style.top = 0
            } else {
                nav.style.top = '-8vh'
            }
            prevScroll = scroll
        }
    })

    return (
        <Container id='nav'>
            <Wrapper id='logo'></Wrapper>
            <NavWrap id='navigation'>
                <Navigation />
            </NavWrap>
            <Wrapper></Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  border: 1px solid #000;
  ${({ theme }) => theme.flexOrder(2)};

  &#logo {
      background-color: #fff;
      ${({ theme }) => theme.flexOrder(0)};
  }
`

const NavWrap = styled.div`
  height: 100%;
  width: 50%;
  border: 1px solid #000;
  ${({ theme }) => theme.flexOrder(1)};
`

const Container = styled.nav`
  height: 8vh;
  width: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  transition: 0.5s;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('center')};
  ${({ theme }) => theme.flexFlow('row nowrap')};

  @media only screen and ${({ theme }) => theme.sizes.tablet} {
      
      #navigation {
          ${({ theme }) => theme.flexOrder(0)};
          width: 25%;
      }

      #logo {
          ${({ theme }) => theme.flexOrder(1)};
          width: 50%;
      }
  }
`