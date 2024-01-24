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
const PlaceholderSquare = styled.div`
  background-color: transparent; // No background color
  border: 1px dashed #ccc; // Dashed border to indicate a placeholder
  border-radius: 5px;
  aspect-ratio: 1 / 1; // Maintain square aspect ratio
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Gallery = ({ babyData, onImageClick }) => {
  const numPlaceholders = 12;

  return (
    <GalleryContainer>
      {Array.isArray(babyData) &&
        [...Array(numPlaceholders)].map((_, index) => {
          const baby = babyData[index];
          return baby ? (
            <ImageSquare
              key={index}
              baby={baby}
              onClick={() => onImageClick && onImageClick(baby)}
            />
          ) : (
            <PlaceholderSquare key={index} />
          );
        })}
    </GalleryContainer>
  );
};

export default Gallery;
