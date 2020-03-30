import React from 'react'
import styled from 'styled-components'
import Wrap from '../Wrap'

const NotFound = () => {
    return (
        <Wrap>
            <Container>
                <h2>Sorry, Your Item is Not Here..</h2>
            </Container>
        </Wrap>
    )
}

export default NotFound

const Container = styled.div`
  height: 69vh;
  width: 100%;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('center')};
  ${({ theme }) => theme.alignItems('center')};
`