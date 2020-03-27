import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SvgMenu from './assets/SvgMenu'
import SvgExit from './assets/SvgExit'

export default function Navigation() {

    const clickMenu = () => {
        document.getElementById('nav-items').classList.toggle('active')
        document.getElementById('menu').classList.toggle('go')
    }

    return (
        <Container>
            <SvgMenu id='menu' onClick={clickMenu} />
            <ul id='nav-items'>
                <SvgExit onClick={clickMenu} id='exit' className='go' />
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/products/1'>
                        <a>Beers</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()}; 
  position: relative;

  ul {
      ${({ theme }) => theme.flex()};
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.justifyContent('space-between')};
      ${({ theme }) => theme.alignItems('center')};
      list-style: none;
  }

  li a{
      font-size: 1rem;
      color: #000;
      text-decoration: none;
      list-style: none;
      padding: 2rem;
      font-weight: 600;
  }

  #menu {
      height: 100%;
      width: 18%;
      position: absolute;
      left: 5vw;
      display: none;
      transition: 0.5s;
  }

  #exit {
      height: 3vh;
      width: 3vh;
      fill: #fff;
      position: absolute;
      top: 5vh;
      left: 5vh;
      display: none;
      transition: 1s;
  }

  @media only screen and ${({ theme }) => theme.sizes.tablet} {

      ul {
          height: 100vh;
          width: 101vw;
          background-color: rgba(21, 21, 21, 0.6);
          position: absolute;
          top: 0;
          left: -150vw;
          ${({ theme }) => theme.flexFlow('column nowrap')};
          ${({ theme }) => theme.justifyContent('flex-start')};
          ${({ theme }) => theme.alignItems('flex-start')};
          transition: 0.5s;
      }

      ul.active {
          left: 0;
      }

      ul.active #exit {
        display: block;
      }

      li {
          padding: 5vh;
          margin-left: 5vw;
      }

      li a {
          color: #fff;
      }
      
      #menu {
          display: block;
      }

      #menu.go {
          opacity: 0;
          transform: rotate(90deg);
      }
  }
`