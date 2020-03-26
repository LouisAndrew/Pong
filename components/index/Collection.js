import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Wrap from '../Wrap'

export default function Collection() {
    return (
        <Page style={{ height: '50vh' }}>
            <Wrap>

                <Container>
                    <h1>COLLECTIONS..</h1>
                    <Case>
                        <h1>CAROUSEL HERE</h1>
                    </Case>
                </Container>

            </Wrap>
        </Page>
    )
}

const Case = styled.div`
  height: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.color};
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.flexFlow('column nowrap')};
  ${({ theme }) => theme.justifyContent('space-between')};
`