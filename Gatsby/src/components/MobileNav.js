import React from "react";
import styled from "styled-components";
import Contact from "../images/Contact.svg";
import Gallery from "../images/Gallery.svg";
import Home from "../images/Home.svg";
import { Link } from "gatsby";

const Nav = styled.nav`
  margin-top: 32px;
  height: 15vh;
  position: sticky;
  bottom: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-top: solid whitesmoke 3px;
  background: white;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
const Text = styled.p`
  padding-top: 8px;
  text-decoration: none;
`;
const Icon = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

function MobileNav() {
  return (
    <Nav>
      <Icon>
        <Link to="/" activeStyle={{ color: "blue" }}>
          <Home />
          <Text>Home</Text>
        </Link>
      </Icon>
      <Icon>
        <Link to="/gallery">
          <Gallery />
          <Text>Gallery</Text>
        </Link>
      </Icon>
      <Icon>
        <Link to="/contact">
          <Contact />
          <Text>Contact</Text>
        </Link>
      </Icon>
    </Nav>
  );
}

export default MobileNav;
