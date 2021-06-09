import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import Article from "../components/Article";
import Button from "../components/Button";
import { GatsbyImage } from "gatsby-plugin-image";
import IndexCarousel from "../components/IndexCarousel";
import BeforeAfter from "../components/BeforeAfter";
import ExciteText from "../components/ExciteText";

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
      "he he he he he he he . ex ex ex ex . . "
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
    text-align: center;
  }
`;
const Excite = styled.div`
  grid-area: ex;
  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;
const CarouselContainer = styled.div`
  grid-area: ca;
  @media only screen and (min-width: 1000px) {
    margin-bottom: 8rem;
  }
`;
const Experience = styled.div`
  grid-area: xp;
  @media only screen and (min-width: 1000px) {
    margin-bottom: 8rem;
  }
`;
const Picture = styled.div`
  grid-area: pi;
  @media only screen and (min-width: 600px) {
    margin-bottom: 8rem;
  }
`;
const HeaderPic = styled(GatsbyImage)`
  @media only screen and (min-width: 600px) {
    height: 100%;
    width: 100%;
  }
  @media only screen and (min-width: 1000px) {
    height: 85vh;
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
const CenterArticle = styled(Article)``;
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
          <ExciteText
            header={data.sanityHomePage.excite_title}
            text={data.sanityHomePage.excite}
          />
        </Excite>
        <Educate>
          <CenterArticle
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
