import React, { useState } from "react";
import styled, { css } from "styled-components";
import { updateRating } from "../features/babyData/babyDataSlice"; // Adjust the import path as necessary
import RatingIcons from "./RatingIcons";
import { FaBaby } from "react-icons/fa"; // Import FaBaby icon
import { useDispatch } from "react-redux";

const ModalCardContainer = styled.div`
  background-color: #fff; // Bright and clean background
  border: 2px solid #f471b5; // Make the border more pronounced
  border-radius: 15px; // Soften the edges
  padding: 25px;
  margin: 20px auto; // Center the card with some margin
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  max-width: 500px; // Limit the maximum width for better readability
  text-align: center;
  transition: transform 0.2s ease-in-out; // Smooth transition for interaction

  &:hover {
    transform: translateY(-5px); // Slight raise effect on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // Enhance shadow on hover
  }
`;

const BabyIMG = styled.div`
  height: 150px;
  width: 150px;
  margin: auto; // Center in the container
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; // Add some space below the icon

  svg {
    fill: ${({ color }) =>
      color || "#000"}; // Default to black if no color is provided
    /* fill: #000; // Apply the theme color to the icon */
    /* fill: #f471b5; // Apply the theme color to the icon */
    width: 80px; // Adjust icon size
    height: 80px;
  }
`;

const DetailButton = styled.button`
  background-color: #f471b5; // Theme color
  color: #ffffff; // Contrast for readability
  border: none;
  border-radius: 20px; // Rounded edges
  padding: 10px 20px;
  font-weight: 600; // Bold text
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #d94087; // Darken on hover for feedback
    transform: scale(1.05); // Slightly enlarge the button
  }
`;

const ModalCard = ({ baby }) => {
  const dispatch = useDispatch();
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleRatingChange = (newRating) => {
    dispatch(updateRating({ id: baby.id, rating: newRating }));
  };

  const toggleDetails = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  // Function to handle the delete action

  if (!baby) {
    return <div>Loading...</div>;
  }

  return (
    <ModalCardContainer>
      <BabyIMG color={baby.color}>
        <FaBaby />
      </BabyIMG>
      <h3>{baby.projectName || "Default Project Name"}</h3>
      <p>{baby.projectDescription || "Default Project Description"}</p>
      {isDetailVisible && (
        <>
          <p>
            URL:{" "}
            <a href={baby.projectURL} target="_blank" rel="noopener noreferrer">
              {baby.projectURL}
            </a>
            {/* URL: <a href={baby.projectURL} target="_blank" rel="noopener noreferrer">{baby.projectURL}</a> */}
          </p>
          {/* <RatingIcons value={baby.rating} onChange={handleRatingChange} /> */}
        </>
      )}
      <DetailButton onClick={toggleDetails}>
        {isDetailVisible ? "Hide Details" : "Show Details"}
      </DetailButton>
    </ModalCardContainer>
  );
};

export default ModalCard;
