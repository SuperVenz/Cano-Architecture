import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ReactCompareSlider } from "react-compare-slider";

const Container = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
  }
`;
const Text = styled.h4`
  @media only screen and (min-width: 600px) {
    padding-bottom: 16px;
    padding-top: 8px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 45%;
  height: 300px;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  &:last-child {
    width: 100%;
    height: 200px;
  }
  @media only screen and (min-width: 1000px) {
    width: 40%;
    height: 100%;
    &:nth-last-child(-n + 3) {
      width: 25%;
      height: 300px;
    }
  }
`;
const ReactCompareSliderStyled = styled(ReactCompareSlider)`
  @media only screen and (min-width: 1000px) {
    height: 350px;
  }
`;
const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 1000px) {
  }
`;
function BeforeAfter(props) {
  const data = useStaticQuery(graphql`
    {
      sanityHomePage {
        beforeAfter {
          afterImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          beforeImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          header
        }
      }
    }
  `);
  return (
    <Container>
      {data.sanityHomePage.beforeAfter.map((obj) => {
        return (
          <Div key={obj.beforeImage.alt}>
            <ReactCompareSliderStyled
              position={50}
              itemOne={
                <StyledImg
                  image={obj.beforeImage.asset.gatsbyImageData}
                  alt={obj.beforeImage.alt}
                />
              }
              itemTwo={
                <StyledImg
                  image={obj.afterImage.asset.gatsbyImageData}
                  alt={obj.afterImage.alt}
                />
              }
            />
            <Text>{obj.header}</Text>
          </Div>
        );
      })}
    </Container>
  );
}

export default BeforeAfter;
