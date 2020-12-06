import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import SvgPong from "./assets/SvgPong";
import Search from "./Search";
import Link from "next/link";

export default function Nav() {
  return (
    <Container id="nav">
      <Wrapper id="logo">
        <Link href="/" passHref>
          <SvgPong className="anim-nav" id="pong" />
        </Link>
      </Wrapper>
      <NavWrap id="navigation">
        <Navigation />
      </NavWrap>
      <Wrapper>
        <Search />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  ${({ theme }) => theme.flexOrder(2)};

  &#logo {
    ${({ theme }) => theme.flexOrder(0)};
    ${({ theme }) => theme.flex()};
    ${({ theme }) => theme.alignItems("center")};
    position: relative;
  }

  #pong {
    height: 70%;
    width: 20%;
    position: absolute;
    left: 3vw;
  }
`;

const NavWrap = styled.div`
  height: 100%;
  width: 50%;
  ${({ theme }) => theme.flexOrder(1)};
`;

const Container = styled.nav`
  height: 8vh;
  width: 100%;
  z-index: 2;
  position: absolute;
  transition: 0.2s;
  top: 0;
  ${({ theme }) => theme.flex()};
  ${({ theme }) => theme.justifyContent("center")};
  ${({ theme }) => theme.flexFlow("row nowrap")};
  background-color: rgba(0, 0, 0, 0);

  // ts-styled-plugin-disable-next-line
  @media only screen and ${({ theme }) => theme.sizes.tablet} {
    #navigation {
      ${({ theme }) => theme.flexOrder(0)};
      width: 25%;
    }

    #logo {
      ${({ theme }) => theme.flexOrder(1)};
      ${({ theme }) => theme.justifyContent("center")};
      width: 50%;
    }

    #pong {
      position: relative;
      left: 0;
    }
  }
`;
