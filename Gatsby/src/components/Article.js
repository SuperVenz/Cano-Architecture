import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-bottom: 24px;
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
`;
const Header = styled.h4`
  font-family: Roboto Slab;
  font-weight: bold;
`;
const ParaLarge = styled.p`
  padding-top: 32px;
  font-size: 1.2rem;
  font-family: Inter;
  line-height: 24px;
`;
function Article({ header, text }) {
  return (
    <Container>
      <Header>{header}</Header>
      <ParaLarge>{text}</ParaLarge>
    </Container>
  );
}

export default Article;
