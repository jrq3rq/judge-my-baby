import React, { useState } from "react";
import styled from "styled-components";
import ImageSquare from "./ImageSquare";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Default state - 4 columns
  grid-gap: 16px;
  padding: 16px;
  min-height: calc(100vh - 120px);
  margin: 30px 40px 30px 40px;

  @media (max-width: 1024px) {
    margin: 20px 20px 20px 20px;
    grid-template-columns: repeat(3, 1fr); // Medium screens - 3 columns
  }

  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;

    grid-template-columns: repeat(2, 1fr); // Small screens - 2 columns
  }
`;

const Gallery = ({ babyData, onImageClick }) => {
  return (
    <GalleryContainer>
<<<<<<< Updated upstream
      {babyData.map((baby, index) => (
        <ImageSquare
          key={index}
          baby={baby}
          onClick={() => onImageClick(baby)}
        />
      ))}
=======
      {Array.isArray(babyData) &&
        babyData.map((baby, index) => (
          <ImageSquare
            key={index}
            baby={baby}
            onClick={() => onImageClick && onImageClick(baby)}
          />
        ))}
>>>>>>> Stashed changes
    </GalleryContainer>
  );
};

export default Gallery;
