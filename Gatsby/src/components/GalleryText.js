import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 24px;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
`;
const Header = styled.h4`
  font-weight: bold;
  color: #414141;
  font-family: Roboto Slab;
`;
const ParaLarge = styled.p`
  padding-top: 32px;
  width: 50%;
  font-family: Inter;
  font-size: 1.2rem;
  line-height: 24px;
  color: #5d5d55;
`;
function GalleryText({ header, text }) {
  return (
    <Container>
      <Header>{header}</Header>
      <ParaLarge>{text}</ParaLarge>
    </Container>
  );
}

export default GalleryText;
