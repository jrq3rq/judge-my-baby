// ImageSquareModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaAngry, FaFrown, FaMeh, FaSmile, FaGrinHearts } from "react-icons/fa";
import Carousel from "./Carousel";

import RatingIcons from "./RatingIcons";

// Interaction icon, assuming you're using a library like react-icons

const ModalBackground = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: 80%; // Set the width to 80% of the viewport

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto; // Add scrollbar if content overflows
  position: relative; // Needed for absolute positioning of children
  max-width: 600px; // Optional, to ensure it doesn't get too wide on larger screens
  max-height: 80vh; // Optional, to ensure it doesn't get too tall
`;

const InteractionButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const LargeCard = styled.div`
  width: 100%;
  height: 500px; // Adjust as needed
  background: #f2f2f2; // Light gray background
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: ${({ isSelected }) =>
    isSelected ? "#007bff" : "#6c757d"}; // Use bootstrap colors for consistency
  font-size: 36px; // Larger icons
  transition: color 0.2s;

  &:hover {
    color: #0056b3; // Darker shade on hover
  }
`;

const ScoreDisplay = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #007bff; // Match the color with the selected icon
  margin-top: 10px;
`;

const EmojiLabel = styled.div`
  margin-top: 20px;
`;
const InteractionIcon = styled.i`
  font-size: 24px; // Adjust based on actual layout
`;

const LabelMarkers = styled.div`
  display: flex;
  position: relative;
  margin: 0 20px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px; // Adjust based on slider thumb size
    right: 10px; // Adjust based on slider thumb size
    height: 2px;
    background: #ddd;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background: #ddd;
    z-index: -1;
  }
`;

// Define your emojis by their shortcode (name) used by emoji-mart
const icons = {
  1: <FaAngry />,
  2: <FaFrown />,
  3: <FaMeh />,
  4: <FaSmile />,
  5: <FaGrinHearts />,
};

// Styled components
const SliderContainer = styled.div`
  margin: 30px;
  text-align: center;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 15px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 35px;
    height: 35px;
    background: #f472b6;
    cursor: pointer;
    border-radius: 50%;
  }

  ::-moz-range-thumb {
    width: 35px;
    height: 35px;
    background: #f472b6;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const ImageSquareModal = ({ show, onClose, children }) => {
  const [carouselData, setCarouselData] = useState([]);

  const handleFormSubmit = (formData) => {
    setCarouselData([...carouselData, formData]);
  };

  return (
    <ModalBackground show={show}>
      <ModalContainer>
        <InteractionButton onClick={onClose}>
          <InteractionIcon>✕</InteractionIcon>{" "}
        </InteractionButton>
        <Carousel items={carouselData} />
      </ModalContainer>
    </ModalBackground>
  );
};

export default ImageSquareModal;
