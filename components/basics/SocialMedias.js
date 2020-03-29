import React from 'react'
import styled from 'styled-components'
import SvgFacebook from './assets/SvgFacebook'
import SvgTwitter from './assets/SvgTwitter'
import SvgInstagram from './assets/SvgInstagram'

const SocialMedias = () => {
    return (
        <Container>
            <SvgFacebook id='fb' />
            <SvgTwitter id='twt' />
            <SvgInstagram id='ig' />
        </Container>
    )
}

export default SocialMedias

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.alignItems('flex-end')};

  svg {
      fill: #fff;
      height: 3vh;
      width: 3vh;
      margin: 0.5vh 0;
  }
`