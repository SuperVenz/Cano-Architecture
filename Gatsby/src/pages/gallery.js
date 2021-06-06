import React from "react";
import GalleryCarousel from "../components/GalleryCarousel";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Article from "../components/Article";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 8px repeat(4, 1fr) 8px;
  grid-template-rows: auto;
  grid-gap: 1.25rem;
  grid-template-areas:
    ". fs fs fs fs ."
    ". sc sc sc sc ."
    ". th th th th ."
    ". fr fr fr fr .";
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
`;

const FirstGal = styled.div`
  grid-area: fs;
  padding-top: 88px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const SecondGal = styled.div`
  grid-area: sc;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const ThirdGal = styled.div`
  grid-area: th;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const FourthGal = styled.div`
  grid-area: fr;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

function gallery({ data }) {
  return (
    <Layout>
      <Grid>
        <FirstGal>
          <Article
            header={data.sanityGalleryPage.precastHeader}
            text={data.sanityGalleryPage.precastText}
          />
          <GalleryCarousel images={data.sanityGalleryPage.precast} />
        </FirstGal>
        <SecondGal>
          <Article
            header={data.sanityGalleryPage.renovationsHeader}
            text={data.sanityGalleryPage.renovationText}
          />
          <GalleryCarousel images={data.sanityGalleryPage.renovations} />
        </SecondGal>
        <ThirdGal>
          <Article
            header={data.sanityGalleryPage.concreteHeader}
            text={data.sanityGalleryPage.concreteText}
          />
          <GalleryCarousel images={data.sanityGalleryPage.concrete} />
        </ThirdGal>
        <FourthGal>
          <Article
            header={data.sanityGalleryPage.stainHeader}
            text={data.sanityGalleryPage.stainText}
          />
          <GalleryCarousel images={data.sanityGalleryPage.stain} />
        </FourthGal>
      </Grid>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityGalleryPage {
      precastHeader
      precastText
      precast {
        asset {
          gatsbyImageData
        }
        alt
      }
      renovationText
      renovationsHeader
      renovations {
        asset {
          gatsbyImageData
        }
        alt
      }
      stain {
        asset {
          gatsbyImageData(layout: CONSTRAINED, formats: AUTO)
        }
        alt
      }
      stainHeader
      stainText
      concreteHeader
      concreteText
      concrete {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
export default gallery;
