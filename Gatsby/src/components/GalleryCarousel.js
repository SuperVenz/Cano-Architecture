import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 600px;
  }
`;
const Div = styled.div``;
const StyledCarousel = styled(Carousel)`
  width: 100%;
  /* Background */
  .control-next.control-arrow,
  .control-next.control-arrow:hover {
    background: black;
    height: 99%;
    opacity: 0.5;
    z-index: 1;
  }
  .control-prev.control-arrow,
  .control-prev.control-arrow:hover {
    background: black;
    height: 99%;
    opacity: 0.5;
    z-index: 1;
  }

  /* Arrow opacity */
  .control-arrow,
  .carousel-slider .control-arrow {
    background: black;
    height: 99%;
    opacity: 0.5;
    z-index: 1;
  }

  /* before Arrow */
  .control-next.control-arrow:before {
    content: "";
    border: solid white;
    border-width: 0 8px 8px 0;
    display: block;
    padding: 8px;
    margin-right: 16px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .carousel .control-prev.control-arrow:before {
    content: "";
    border: solid white;
    border-width: 0 8px 8px 0;
    display: block;
    padding: 8px;
    margin-left: 16px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  @media only screen and (min-width: 600px) {
    control-next.control-arrow,
    .control-next.control-arrow:hover {
      background: black;
      height: 99%;
      opacity: 0.5;
      z-index: 1;
    }
    .control-prev.control-arrow,
    .control-prev.control-arrow:hover {
      background: black;
      height: 99%;
      opacity: 0.5;
      z-index: 1;
    }

    /* Arrow opacity */
    .control-arrow,
    .carousel-slider .control-arrow {
      background: black;
      height: 99%;
      opacity: 0.5;
      z-index: 1;
    }
    /* before Arrow */
    .control-next.control-arrow:before {
      content: "";
      border: solid white;
      border-width: 0 8px 8px 0;
      display: block;
      padding: 14px;
      margin-right: 16px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
    .carousel .control-prev.control-arrow:before {
      content: "";
      border: solid white;
      border-width: 0 8px 8px 0;
      display: block;
      padding: 14px;
      margin-left: 16px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }

    width: 80%;
  }
`;
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
