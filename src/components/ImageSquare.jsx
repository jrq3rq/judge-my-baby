// components/ImageSquare.jsx
import React, { useState } from "react";
import styled from "styled-components";
import ImageSquareModal from "./ImageSquareModal";
import RatingIcons from "./RatingIcons";

const InfoText = styled.div`
  font-size: 12px; // Adjust as needed
  color: #333; // Adjust color as needed
  margin: 5px 0; // Spacing between text elements
`;

const BabyIMG = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid #494949; // Border color
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

const Square = styled.div`
  background-color: #eee; // Placeholder color for the square
  border: 1px solid #494949; // Border color
  border-radius: 5px; // Rounded corners
  cursor: pointer; // Cursor indicates it's clickable
  position: relative; // Needed for absolute positioning of children, if any
  overflow: hidden; // Ensures nothing overflows from the rounded corners
  aspect-ratio: 1 / 1; // Keeps the square aspect ratio
  display: flex; // Use flexbox for aligning children
  flex-direction: column; // Stack children vertically
  align-items: center; // Center children horizontally
  justify-content: center; // Center children vertically
  transition: opacity 0.3s ease; // Smooth transition for hover effect

  &:hover {
    opacity: 0.7; // Hover effect for the square
  }

  // Responsive adjustments if necessary
  @media (max-width: 768px) {
    // Adjustments for smaller screens go here
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;

const ImageSquare = ({ baby }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Square onClick={handleOpenModal}>
        {/* Display baby information */}
        <BabyIMG>BABY IMAGE: {baby.projectName}</BabyIMG>
        <InfoText>Character: {baby.character || "No character data"}</InfoText>
        {/* Other baby details */}
        <RatingIcons value={baby.rating || 0} onChange={() => {}} />
        <StyledButton>Judge The Baby</StyledButton>
      </Square>

      {isModalOpen && (
        <ImageSquareModal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          baby={baby}
        />
      )}
    </>
  );
};

export default ImageSquare;
