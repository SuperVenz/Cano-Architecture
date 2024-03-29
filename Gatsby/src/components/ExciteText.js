import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
  font-family: serif;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  @media only screen and (min-width: 600px) {
    padding-right: 20%;
  }
`;
const Header = styled.h4`
  font-weight: bold;
`;
const ParaLarge = styled.p`
  padding-top: 32px;
  font-size: 1.2rem;
  line-height: 24px;
  color: #5d5d55;
  margin-bottom: 10%;
`;

function ExciteText({ header, text }) {
  return (
    <Container>
      <Header>{header}</Header>
      <ParaLarge>{text}</ParaLarge>
      <Button text="Contact Us" />
    </Container>
  );
}

export default ExciteText;
