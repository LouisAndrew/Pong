import Layout from "../components/Layout"
import ShowcaseCard from '../components/cards/ShowcaseCard.js'
import styled from 'styled-components'
import Wrap from '../components/Wrap'

export default function about() {
    return (
        <Layout>
            <Wrap>
                <Container>
                    <h1>Hey There! 👋</h1>
                    <h5>
                        This is a website created using Next JS for an imaginary business (meh, obviously). All of the beer datas on this website are provided from Punk API. Here's the <a href='https://punkapi.com/documentation/v2'>link</a>, check them out!
                        Thank you very much for visiting this website. If you check my other projects you can click <a href='https://github.com/LouisAndrew'>here</a> to visit my personal portofolio.
                        See you on other creative sites!
                    </h5>
                </Container>
            </Wrap>
        </Layout>
    )
}

const Container = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 8vh;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent('center')};
  ${({ theme }) => theme.alignItems('center')};
  ${({ theme }) => theme.flexFlow('column nowrap')};

  a {
      text-decoration: none;
      font-weight: bold;
      color: #000;
  }

  h5 {
      text-align: center;
  }

  h1 {
      margin-bottom: 1em;
      font-weight: 400;
  }
`