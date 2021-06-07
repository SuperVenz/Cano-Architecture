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
    justify-content: center;
  }
`;
const Text = styled.h4`
  @media only screen and (min-width: 600px) {
    padding-bottom: 16px;
    padding-top: 8px;
  }
`;
const TextLabel = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    font-size: 1.3em;

    flex-direction: row nowrap;
    width: 95%;
    justify-content: space-between;
    position: relative;
    top: 30px;
    z-index: 40;
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
      height: 350px;
    }
  }
`;

const ReactCompareSliderStyled = styled(ReactCompareSlider)`
  @media only screen and (min-width: 1000px) {
    height: 500px;
    &:nth-last-child(-n + 3) {
      height: 350px;
    }
  }
`;
const StyledImg = styled(GatsbyImage)`
  @media only screen and (min-width: 1000px) {
  }
`;

const B = styled.p`
  background-color: white;
  opacity: 0.5;
  /* display: ${(props) => (props.primary ? "block" : "none")}; */
`;
const A = styled.p`
  background-color: white;
  /* display: ${(props) => (props.primary ? "block" : "none")}; */
  opacity: 0.5;
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
                  objectFit="contain"
                />
              }
              itemOne={
                <StyledImg
                  image={obj.afterImage.asset.gatsbyImageData}
                  alt={obj.afterImage.alt}
                  objectFit="contain"
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
