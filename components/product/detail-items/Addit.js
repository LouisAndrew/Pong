import React from "react";
import styled from "styled-components";

export default function Addit(props) {
  const data = {
    "International Bitternes Unit": props.info.ibu,
    "Alcohol by Volume": props.info.abv,
    "Attentuation Level": props.info.atl,
  };
  let array = [];
  for (let i in data) {
    const temp = `${i}: ${data[i]}`;
    array = [...array, temp];
  }
  return (
    <Container>
      <h2>Additional Informations</h2>
      {array.map((x) => (
        <h3 key={x}>{x}</h3>
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  padding: 1em;

  h2 {
    font-size: 2rem;
    font-weight: 300;
    text-align: right;
    margin-bottom: 1vh;
  }

  h3 {
    font-size: 1.1rem;
    text-align: right;
  }
`;
