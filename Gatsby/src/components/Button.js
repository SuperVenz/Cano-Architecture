import React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 17%;
  width: 63%;
  background: #0038ff;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 32px;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 1000px) {
    width: 50%;
    height: 10%;
  }
  &:hover {
    background: #1b43c6;
  }
`;
const Text = styled.h4`
  color: white;
`;
function Button({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
