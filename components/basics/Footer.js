import React from "react";
import styled from "styled-components";
import FooterLogo from "./FooterLogo";
import SocialMedias from "./SocialMedias";

const Footer = () => {
  return (
    <Container>
      <Item>
        <FooterLogo />
      </Item>
      <Item>
        <SocialMedias />
      </Item>
    </Container>
  );
};

export default Footer;

const Item = styled.div`
  ${({ theme }) => theme.fitContainer()};
`;

const Container = styled.div`
  height: 25vh;
  width: 100%;
  padding: ${({ theme }) => theme.pad};
  background-color: ${({ theme }) => theme.footColor};
  ${({ theme }) => theme.flex()};
`;
