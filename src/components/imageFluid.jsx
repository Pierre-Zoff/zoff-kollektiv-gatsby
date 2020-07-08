import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ImageFluid = ({ name: fileName, ...props }) => {
  const {
    allImageSharp: { images },
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            fluid(quality: 75, traceSVG: {}) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const imageFluid = images.find(
    ({
      node: {
        fluid: { originalName: name },
      },
    }) => name === fileName
  );

  return imageFluid ? <Img {...props} {...imageFluid.node} /> : null;
};

export default ImageFluid;
