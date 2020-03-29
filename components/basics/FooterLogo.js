import React from 'react'
import styled from 'styled-components'
import SvgPong from './assets/SvgPong'

const FooterLogo = () => {
    return (
        <Container>
            <SvgPong id='pong-bottom' />

            <h5>pong@pongpong.com</h5>
            <h5>Herderstr 6. <br /> 12163, Berlin <br />Germany</h5>
        </Container>
    )
}

export default FooterLogo

const Container = styled.div`
  height: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.alignItems('flex-start')};
  ${({ theme }) => theme.justifyContent('space-evenly')};
  color: #fff;
  background-color: ${({ theme }) => theme.footColor};

  #pong-bottom {
      height: 6vh;
      width: 6vh;
  }

  #pong-bottom path {
      fill: #fff;
  }
`