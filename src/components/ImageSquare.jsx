import React, { useState } from "react";
import styled from "styled-components";
import ImageSquareModal from "./ImageSquareModal";
import RatingIcons from "./RatingIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { updateRating } from "../features/babyData/babyDataSlice";
import { useDispatch } from "react-redux";

import { FaBaby, FaSadCry } from "react-icons/fa";

const HeaderText = styled.h1`
  font-size: 18px; // Adjust as needed
  text-transform: uppercase;
`;

const InfoText = styled.div`
  font-size: 12px; // Adjust as needed
  color: #333; // Adjust color as needed
  padding: 2px 0px; // Spacing between text elements
`;
const SubText = styled.div`
  text-transform: uppercase;
  font-size: 12px; // Adjust as needed
  color: #333; // Adjust color as needed
  padding: 2px 0px; // Spacing between text elements
`;

const Square = styled.div`
  background-color: ${({ color }) => color};
  border: 1px solid #000;
  /* background-color: #f471b5; */
  /* background-color: #eee;  */

  /* border: 2px solid #333; // Border color */
  border-radius: 5px; // Rounded corners
  position: relative; // Needed for absolute positioning of children, if any
  overflow: hidden; // Ensures nothing overflows from the rounded corners
  aspect-ratio: 1 / 1; // Keeps the square aspect ratio
  display: flex; // Use flexbox for aligning children
  flex-direction: column; // Stack children vertically
  align-items: center; // Center children horizontally
  justify-content: center; // Center children vertically
  transition: opacity 0.3s ease; // Smooth transition for hover effect

  /* &:hover {
    opacity: 0.7; // Hover effect for the square
  } */

  // Responsive adjustments if necessary
  @media (max-width: 768px) {
    // Adjustments for smaller screens go here
  }
`;

const StyledButton = styled.button`
  padding: 12px 20px;
  color: #fff; /* Text color */
  background-color: ${({ color }) => color};
  /* background-color: #f471b5; */
  border-radius: 5px;
  width: 80%; /* Button width */
  font-weight: 600; /* Bold text */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #333;
  /* border: 1px solid #f471b5; */
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Shadow on hover */
    border: 1px solid #000;
  }
`;

const BabyIMG = styled.div`
  height: 100px;
  width: 150px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin-top: 10px;
  display: flex; // Use flexbox for alignment
  flex-direction: column; // Stack children in a vertical column
  align-items: center; // Center vertically in the cross-axis
  justify-content: center; // Center horizontally in the main-axis
  svg {
    fill: ${({ color }) => color}; // Dynamically set the icon color
  }
`;

const ImageSquare = ({ baby }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); // Correct usage of useDispatch

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleRatingChange = (newRating) => {
    dispatch(updateRating({ id: baby.id, rating: newRating })); // Corrected usage
  };
  const BabyMoodIcon = ({ rating }) => {
    return rating >= 3 ? <FaBaby size={24} /> : <FaSadCry size={24} />;
  };

  return (
    <>
      <Square color={baby.color}>
        {" "}
        {/* Pass dynamic color */}
        <BabyIMG>
          <BabyMoodIcon rating={baby.rating} />
          <FontAwesomeIcon icon={faBabyCarriage} size="3x" />
        </BabyIMG>
        {/* <HeaderText>{baby.projectName || "Default Project Name"}</HeaderText> */}
        {/* <InfoText> Baby Persona:</InfoText> */}
        {/* <SubText>{baby.character || "No character data"}</SubText> */}
        <RatingIcons value={baby.rating} onChange={handleRatingChange} />
        <StyledButton onClick={handleOpenModal} color={baby.color}>
          Judge My Baby
        </StyledButton>
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
