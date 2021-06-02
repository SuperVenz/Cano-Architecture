import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 24px;
`;
const Text = styled.p`
  padding-top: 16px;
`;
const Mobile = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

function IndexCarousel(props) {
  const data = useStaticQuery(graphql`
    {
      sanityHomePage {
        carousel {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              formats: AUTO
              aspectRatio: 0.7232142857
            )
          }
          alt
          header
        }
      }
    }
  `);
  return (
    <Mobile>
      <Carousel
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={50}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        autoplay={false}
      >
        {data.sanityHomePage.carousel.map((obj) => {
          return (
            <Container key={obj.alt}>
              <GatsbyImage image={obj.asset.gatsbyImageData} alt={obj.alt} />
              <Text>{obj.header}</Text>
            </Container>
          );
        })}
      </Carousel>
    </Mobile>
  );
}

export default IndexCarousel;
