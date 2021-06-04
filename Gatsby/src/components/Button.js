import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin-top: 32px;
  height: 15%;
  width: 60%;
  background: #0038ff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
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
