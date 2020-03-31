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
                <li className='anim-nav'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className='anim-nav'>
                    <Link href='/products/index-1'>
                        <a>Beers</a>
                    </Link>
                </li>
                <li className='anim-nav'>
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
      transition: 0.2s;
  }

  #menu {
      height: 100%;
      width: 18%;
      position: absolute;
      left: 4vw;
      display: none;
      transition: 0.5s;
  }

  #exit {
      height: 3vh;
      width: 3vh;
      fill: #fff;
      position: absolute;
      top: 4vw;
      left: 4vw;
      display: none;
      transition: 1s;
  }

  li a:hover {
      font-size: 1.5rem;
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
          padding: 4vw;
          margin-left: 4vw;
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

  @media only screen and ${({ theme }) => theme.sizes.mobile} {

      #menu {
          left: 2vh;
      }

      #exit {
          left: 2vh;
      }
  } 

  @media only screen and ( orientation: landscape ) and ( max-width: 850px ) {
      
      #menu {
          width: 10%;
          fill: #fff;
      }
  }
`