import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin-top: 32px;
  height: 12vh;
  width: 95%;
  background: #0038ff;
  border: none;
  @media only screen and (min-width: 600px) {
    height: 7vh;
    width: 60%;
  }
  @media only screen and (min-width: 1000px) {
    height: 10vh;
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
