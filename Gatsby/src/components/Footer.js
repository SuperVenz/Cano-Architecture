import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
  background: black;
  height: 100%;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;
const Div = styled.div``;
const P = styled.p`
  padding-top: 8px;
`;
const Logo = styled(GatsbyImage)``;
function Footer(props) {
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
    <Wrapper>
      <Logo
        image={data.sanityMetaData.logo.asset.gatsbyImageData}
        alt={data.sanityMetaData.logo.alt}
        objectFit="contain"
      />
    </Wrapper>
  );
}

export default Footer;
