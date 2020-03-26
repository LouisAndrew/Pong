import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'

export default function Intro() {
    return (
        <Page style={{ height: '50vh', marginTop: '2em' }}>
            <Wrap>

                <Container>
                    
                </Container>

            </Wrap>
        </Page>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  background-color: ${({ theme }) => theme.color};
`