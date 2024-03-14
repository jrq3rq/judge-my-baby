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
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth */
  text-align: center;
  /* transition: transform 0.2s ease-in-out; // Smooth transition for interaction */

  /* &:hover {
    transform: translateY(-5px); // Slight raise effect on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // Enhance shadow on hover
  } */
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ContentRow = styled.div`
  display: flex;
  flex: 1;
`;

const Column = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }

  &:nth-child(1) {
    flex: 1;
  }

  &:nth-child(2) {
    flex: 3;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    border-right: none;
    padding: 10px;
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 20px; // Spacing between sections
  &:last-child {
    margin-bottom: 0; // No spacing after the last section
  }
`;

const Header = styled.h1`
  width: auto;
  text-transform: uppercase;
  white-space: normal; // Allows the text to wrap
  word-break: break-word; // Ensures words break to prevent overflow
  overflow: visible; // Text is visible outside the box (optional, can be removed)
`;

const Text = styled.div`
  width: auto;
  white-space: normal; // Allows the text to wrap
  word-break: break-word; // Ensures words break to prevent overflow
  overflow: visible; // Text is visible outside the box (optional, can be removed)
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const HighlightableText = styled.div`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "blue" : "black")};
  &:hover {
    color: blue;
  }
`;

const RatingRow = styled.div`
  width: 100%;
  padding-top: 20px; // Space above the rating icons
  border-top: 1px solid #ccc;
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
    <Container>
      <ContentRow>
        <Column>
          <HighlightableText key={baby.id}>
            {baby.projectName}
          </HighlightableText>
        </Column>
        <Column>
          <Section key={baby.id}>
            <Header>{baby.projectName}</Header>
            <Text>{baby.projectDescription}</Text>
            <BabyIMG color={baby.color}>
              <FaBaby />
            </BabyIMG>
            <Text>{baby.projectDescription}</Text>
            <Text>{baby.projectDescription}</Text>
          </Section>
        </Column>
      </ContentRow>
      <RatingRow>
        <RatingIcons />
      </RatingRow>
    </Container>
  );
};

export default ModalCard;
