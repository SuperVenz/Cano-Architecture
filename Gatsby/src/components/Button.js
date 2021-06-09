import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled(Link)`
  padding: 1rem;
  font-size: 33.18px;
  font-family: Inter;
  background: #0038ff;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: 2.07375rem;
  font-weight: bold;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 1000px) {
    width: 20vw;
  }
  &:hover {
    background: #1b43c6;
  }
`;

function Button({ text }) {
  return <Container to="contact">{text}</Container>;
}

export default Button;
