import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 2rem;
  line-height: 40px;
  flex-grow: 1;
  font-size: 33.18px;
  font-family: Inter;
  background: #0038ff;
  width: 100%;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-top: 32px;

  @media only screen and (min-width: 600px) {
    width: 50vw;
  }
  @media only screen and (min-width: 1000px) {
    width: 50%;
    height: 6.5rem;
    margin-bottom: 0px;
  }
  &:hover {
    background: #1b43c6;
  }
`;
const Text = styled.h3`
  color: white;
  font-size: 2.07375rem;
  font-weight: bold;
`;
function Button({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
