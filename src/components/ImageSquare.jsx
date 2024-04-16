import React, { useState } from "react";
import styled from "styled-components";
import ImageSquareModal from "./ImageSquareModal";
import RatingIcons from "./RatingIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { updateRating } from "../features/babyData/babyDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  background-color: #fff;
  /* background-color: ${({ color }) => color}; */
  border: 8px dashed ${({ color }) => color};
  /* border: 2px solid #000; */
  /* background-color: #f471b5; */
  /* background-color: #eee;  */
  /* border: 2px solid #333; // Border color */
  border-radius: 8px; // Rounded corners
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
  }
`;

const StyledButton = styled.button`
  padding: 12px 20px;
  color: #fff; /* Text color */
  background-color: ${({ color }) => color}; /* Dynamic background color */
  border-radius: 5px;
  width: 80%; /* Adjust width as needed */
  font-weight: 600; /* Bold text */
  font-size: 1rem; /* Default font size */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* border: 2px solid #000000; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 15px; /* Smaller padding for smaller screens */
    font-size: 0.65rem; /* Smaller font size for mobile screens */
    margin-bottom: 10px;
  }
`;

const BabyIMG = styled.div`
  height: 100px;
  width: 150px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 80px; /* Adjust size */
    width: 120px;
    svg {
      font-size: 2rem; /* Adjust icon size */
    }
  }
`;

const RatingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // Assuming RatingIcons renders individual icons that can be targeted with CSS
  // Adjust the size of icons within RatingIcons based on screen width
  svg {
    width: 24px; // Default size
    height: 24px; // Default size
    @media (max-width: 768px) {
      width: 16px; // Smaller size for small screens
      height: 16px; // Smaller size for small screens
    }
  }
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
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
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigate = () => {
    // Navigate to a dynamic route based on the baby's id
    navigate(`/baby/${baby.id}`);
  };

  return (
    <>
      <Square color={baby.color}>
        {/* Pass dynamic color */}
        <BabyIMG>
          <BabyMoodIcon rating={baby.rating} />
          <FontAwesomeIcon icon={faBabyCarriage} size="3x" />
        </BabyIMG>
        {/* <HeaderText>{baby.projectName || "Default Project Name"}</HeaderText> */}
        {/* <InfoText> Baby Persona:</InfoText> */}
        {/* <SubText>{baby.character || "No character data"}</SubText> */}
        <RatingIconWrapper>
          <RatingIcons value={baby.rating} onChange={handleRatingChange} />
        </RatingIconWrapper>
        {/* <StyledButton onClick={handleNavigate} color={baby.color}> */}
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
