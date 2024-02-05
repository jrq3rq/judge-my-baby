import React from "react";
import styled from "styled-components";
import ImageSquare from "./ImageSquare";
import { useSelector } from "react-redux";

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

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Adjust as per your layout
  grid-gap: 16px;
  padding: 16px;
  margin: 40px 40px 40px 40px;

  @media (max-width: 1024px) {
    margin: 40px 10px 40px 10px;
    grid-template-columns: repeat(3, 1fr); // Medium screens - 3 columns
  }

  @media (max-width: 768px) {
    /* margin: 0px 0px 0px 0px; */

    grid-template-columns: repeat(2, 1fr); // Small screens - 2 columns
  }
`;

const CreateButton = styled.button`
  /* padding: 10px 15px; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  /* border: 1px dashed #ccc;  */
  transition: all 0.3s ease;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); */

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Gallery = ({ babyData, onImageClick, onButtonClick }) => {
  const babies = useSelector((state) => state.babyData.babies);
  // console.log(babies); // Log to see the data
  console.log("Gallery Data:", babies);
  const numPlaceholders = 11 - babies.length;

  return (
    <GalleryContainer>
      <CreateButton onClick={onButtonClick}>Create Your Baby</CreateButton>
      {babies.map((baby, index) => (
        <ImageSquare
          key={index}
          baby={baby}
          onClick={() => onImageClick && onImageClick(baby)}
        />
      ))}
      {[...Array(numPlaceholders)].map((_, index) => (
        // Use a unique key for each placeholder to avoid React key warnings
        <PlaceholderSquare key={`placeholder-${index}`} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
