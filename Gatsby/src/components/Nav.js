import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Container = styled.nav`
  display: none;
  @media only screen and (min-width: 600px) {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    flex-flow: column nowrap;
    background: #414141;
    height: 20vh;
    align-items: center;
    border-bottom: solid black 3px;
  }
  @media only screen and (min-width: 1000px) {
    flex-flow: row nowrap;
    height: 10vh;
  }
`;
const Logo = styled(GatsbyImage)`
  width: 30%;

  @media only screen and (min-width: 1000px) {
    width: 15%;
    margin-left: 10%;
    height: 100%;
    margin-right: 5%;
  }
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media only screen and (min-width: 1000px) {
    width: auto;
    margin-left: 25%;
  }
`;
const Text = styled.h4`
  color: white;
  font-size: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: bold;
  text-decoration: none;
  @media only screen and (min-width: 1000px) {
    padding-left: 64px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
function Nav() {
  const data = useStaticQuery(graphql`
    {
      sanityMetaData {
        logo {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Logo
        image={data.sanityMetaData.logo.asset.gatsbyImageData}
        alt={data.sanityMetaData.logo.alt}
        objectFit="fill"
      />
      <Div>
        <StyledLink to="/">
          <Text>Home</Text>
        </StyledLink>
        <StyledLink to="/gallery">
          <Text>Galleries</Text>
        </StyledLink>
        <StyledLink to="/contact">
          <Text>Contact</Text>
        </StyledLink>
      </Div>
    </Container>
  );
}

export default Nav;
