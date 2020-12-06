import Layout from "../components/Layout";
import styled from "styled-components";
import Wrap from "../components/Wrap";

export default function about() {
  return (
    <Layout>
      <Wrap>
        <Container>
          <h1>Hey There! 👋</h1>
          <h5>
            This is a simple e-commerce like website created using NextJS.
            <br />
            All of the beer datas within the website are provided by{" "}
            <a href="https://punkapi.com/">Punk API</a>
            <br />
            Thank you for visiting this website 🌟. Click{" "}
            <a href="https://github.com/LouisAndrew">here</a> to browse my
            repository
          </h5>
        </Container>
      </Wrap>
    </Layout>
  );
}

const Container = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 8vh;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent("center")};
  ${({ theme }) => theme.alignItems("center")};
  ${({ theme }) => theme.flexFlow("column nowrap")};

  line-height: 150%;

  a {
    text-decoration: underline;
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
`;
