import React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 15%;
  width: 65%;
  background: #0038ff;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 40px;
  margin-top: 32px;
  margin-bottom: 32px;
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
const Text = styled.h3`
  color: white;
  font-size: 24px;
`;
function Button({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
