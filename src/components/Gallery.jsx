// components/Gallery.jsx
import React from "react";
import styled from "styled-components";
import ImageSquare from "./ImageSquare";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Default state - 4 columns
  grid-gap: 16px;
  padding: 16px;
  min-height: calc(100vh - 120px);
  margin: 30px 30px 30px 30px;

  @media (max-width: 1024px) {
    margin: 20px 20px 20px 20px;

    grid-template-columns: repeat(3, 1fr); // Medium screens - 3 columns
  }

  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;

    grid-template-columns: repeat(2, 1fr); // Small screens - 2 columns
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      {Array.from({ length: 12 }).map((_, index) => (
        <ImageSquare key={index} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
