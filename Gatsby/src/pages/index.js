import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import Article from "../components/Article";
import Button from "../components/Button";
import { GatsbyImage } from "gatsby-plugin-image";
import IndexCarousel from "../components/IndexCarousel";
import BeforeAfter from "../components/BeforeAfter";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8px repeat(4, 1fr) 8px;
  grid-template-rows: auto;
  grid-gap: 1.25rem;
  grid-template-areas:
    "he he he he he he"
    ". ex ex ex ex ."
    ". ed ed ed ed ."
    "ca ca ca ca ca ca"
    ". xp xp xp xp ."
    "pi pi pi pi pi pi";

  @media only screen and (min-width: 600px) {
    grid-template-columns: 32px repeat(8, 1fr) 24px;
    grid-gap: 1.25rem;
    grid-template-areas:
      "he he he . ex ex ex ex ex ."
      ". ed ed ed ed ed ed ed ed ."
      ". ca ca ca ca ca ca ca ca ."
      ". xp xp xp xp xp xp xp xp ."
      "pi pi pi pi pi pi pi pi pi pi";
  }
  /* Desktop */
  @media only screen and (min-width: 1000px) {
    display: grid;
    margin-left: 4.375;
    grid-gap: 1.25rem;
    margin-right: 4.375;
    grid-template-columns: 40px repeat(12, 1fr) 40px;
    grid-template-areas:
      "he he he he he he . ex  ex ex ex ex . . "
      ". . . . . ed ed ed ed ed . . . ."
      ". ca ca ca ca ca ca ca ca ca ca ca ca ."
      ". xp xp xp xp xp . pi pi pi pi pi pi pi";
  }
`;

const Header = styled.div`
  grid-area: he;
`;
const Educate = styled.div`
  grid-area: ed;
  margin-top: 32px;
  @media only screen and (min-width: 600px) {
    margin-top: 20%;
  }
`;
const Excite = styled.div`
  grid-area: ex;
  @media only screen and (min-width: 1000px) {
    margin-top: 84px;
    margin-left: 130px;
  }
`;
const CarouselContainer = styled.div`
  grid-area: ca;
  @media only screen and (min-width: 1000px) {
    margin-bottom: 10%;
  }
`;
const Experience = styled.div`
  grid-area: xp;
  margin-top: 32px;
  @media only screen and (min-width: 1000px) {
    padding-bottom: 10%;
  }
`;
const Picture = styled.div`
  grid-area: pi;
  @media only screen and (min-width: 600px) {
    padding-bottom: 10%;
  }
`;
const HeaderPic = styled(GatsbyImage)`
  @media only screen and (min-width: 600px) {
    height: 110%;
    width: 120%;
  }
`;
const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 1000px) {
  }
`;
const StyledPic = styled(GatsbyImage)`
  @media only screen and (min-width: 1000px) {
    width: 100%;
    height: 110%;
  }
`;
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Grid>
        <Header>
          <HeaderPic
            image={data.sanityHomePage.topPic.asset.gatsbyImageData}
            alt={data.sanityHomePage.topPic.alt}
          />
        </Header>
        <Excite>
          <Article
            header={data.sanityHomePage.excite_title}
            text={data.sanityHomePage.excite}
          />
          <Button text="Contact Us" />
        </Excite>
        <Educate>
          <Article
            header={data.sanityHomePage.educate_title}
            text={data.sanityHomePage.educate}
          />
        </Educate>
        <CarouselContainer>
          <BeforeAfter />
          <IndexCarousel />
        </CarouselContainer>
        <Experience>
          <Article
            header={data.sanityHomePage.experience_title}
            text={data.sanityHomePage.experience}
          />
          <StyledImg
            image={data.sanityHomePage.expPic.asset.gatsbyImageData}
            alt={data.sanityHomePage.expPic.alt}
          />
        </Experience>
        <Picture>
          <StyledPic
            image={data.sanityHomePage.engagePic.asset.gatsbyImageData}
            alt={data.sanityHomePage.engagePic.alt}
          />
        </Picture>
      </Grid>
    </Layout>
  );
};
export const query = graphql`
  {
    sanityHomePage {
      excite
      excite_title
      educate_title
      educate
      experience
      experience_title
      topPic {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        alt
      }
      expPic {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        alt
      }
      engagePic {
        alt
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default IndexPage;
