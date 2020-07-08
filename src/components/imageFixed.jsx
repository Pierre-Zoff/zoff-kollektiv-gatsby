import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ImageFixed = ({ name: fileName, isMediaStripe = false, ...props }) => {
  const {
    allImageSharp: { images },
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            fixed(height: 1000) {
              height
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const imageFixed = images.find(
    ({
      node: {
        fixed: { originalName: name },
      },
    }) => name === fileName
  );

  return imageFixed ? (
    <Img
      {...props}
      {...imageFixed.node}
      style={{ position: "unset", height: "unset" }}
      className={isMediaStripe && "mediaStripe__element"}
      imgStyle={{
        objectFit: "contain",
        objectPosition: "50% 50%",
        position: "relative",
      }}
    />
  ) : null;
};

export default ImageFixed;
