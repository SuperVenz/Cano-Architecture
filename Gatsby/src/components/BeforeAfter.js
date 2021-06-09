import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ReactCompareSlider } from "react-compare-slider";

const Container = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;
const Text = styled.p`
  @media only screen and (min-width: 600px) {
    padding-bottom: 16px;
    padding-top: 1rem;
    font-size: 1.2rem;
    color: #414141;
  }
`;
const TextLabel = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    font-weight: bold;
    color: #414141;
    font-size: 1.3em;
    flex-direction: row nowrap;
    width: 100%;
    justify-content: space-between;
    position: relative;
    top: 14.5%;
    z-index: 40;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 49.5%;
  height: 300px;
  align-items: center;
  &:last-child {
    width: 100%;
    height: 200px;
  }
  @media only screen and (min-width: 1000px) {
    align-items: flex-start;
    height: 35vh;
    &:nth-last-child(-n + 3) {
      width: 32.6666666667%;
      height: 33vh;
    }
  }
`;

const ReactCompareSliderStyled = styled(ReactCompareSlider)`
  @media only screen and (min-width: 1000px) {
    &:nth-last-child(-n + 3) {
    }
  }
`;
const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 1000px) {
    height: 100%;
    &:nth-last-child(-n + 3) {
      height: 100%;
    }
  }
`;

const B = styled.p`
  margin-left: 8px;
  background-color: white;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

  /* display: ${(props) => (props.primary ? "block" : "none")}; */
`;
const A = styled.p`
  margin-right: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: white;

  /* display: ${(props) => (props.primary ? "block" : "none")}; */
`;
function BeforeAfter(props) {
  const [beforeTag, setBeforeTag] = useState(true);
  const [afterTag, setAfterTag] = useState(true);
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
            <TextLabel>
              <B primary={beforeTag}>Before</B>
              <A primary={afterTag}>After</A>
            </TextLabel>
            <ReactCompareSliderStyled
              // onPositionChange={function update(pos) {
              //   if (pos >= 60) {
              //     setAfterTag(true);
              //     setBeforeTag(false);
              //   } else if (pos <= 49) {
              //     setAfterTag(false);
              //     setBeforeTag(true);
              //   }
              // }}
              position={50}
              itemTwo={
                <StyledImg
                  image={obj.beforeImage.asset.gatsbyImageData}
                  alt={obj.beforeImage.alt}
                  objectFit="cover"
                />
              }
              itemOne={
                <StyledImg
                  image={obj.afterImage.asset.gatsbyImageData}
                  alt={obj.afterImage.alt}
                  objectFit="cover"
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
