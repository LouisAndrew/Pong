import React from 'react'
import styled from 'styled-components'

export default function Page(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`