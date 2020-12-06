import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbs = ({ id }) => {
  const route = useRouter();
  let path = route.pathname.split("/");

  const tidyPath = (path) => {
    if (path[path.length - 1].startsWith("[")) {
      path[path.length - 1] = id.toString();
    }
    path[0] = "home";
    return path;
  };

  const pageNum = id && Math.trunc(id / 12);

  const setLinks = (path) => {
    switch (path) {
      case "home":
        return "/";
      case "products":
        return ["/products/[index]", `/products/index-${pageNum}`];
      case "beers":
        return ["/products/[index]", `/products/index-${pageNum}`];
      default:
        return "/";
    }
  };

  const newPath = tidyPath(path).map((x, i) => {
    if (i !== path.length - 1) {
      const link = setLinks(x);
      const ret =
        typeof link !== "string" ? (
          <Link key={link[0]} href={link[0]} as={link[1]}>
            <a>{x}/</a>
          </Link>
        ) : (
          <Link key={link} href={link}>
            <a>{x}/</a>
          </Link>
        );
      return ret;
    } else return <span style={{ fontWeight: "bold" }}>{x}</span>;
  });

  return (
    <Container>
      <h5>{newPath} </h5>
    </Container>
  );
};

export default BreadCrumbs;

const Container = styled.div`
  a {
    color: #000;
    text-decoration: none;
    transition: 0.2s;
  }

  html.no-touch & a:hover {
    font-weight: bold;
  }
`;
