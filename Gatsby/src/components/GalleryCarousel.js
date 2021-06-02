import React from "react";
import { Carousel } from "react-responsive-carousel";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;
const StyledCarousel = styled(Carousel)``;
function GalleryCarousel({ images }) {
  return (
    <StyledCarousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      showArrows={true}
      autoplay={false}
    >
      {images.map((pic, i) => {
        return (
          <div key={i}>
            <StyledImg image={pic.asset.gatsbyImageData} alt={pic.alt} />
          </div>
        );
      })}
    </StyledCarousel>
  );
}

export default GalleryCarousel;
