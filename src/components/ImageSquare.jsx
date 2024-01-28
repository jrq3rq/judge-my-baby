// components/ImageSquare.jsx
import React, { useState } from "react";
import styled from "styled-components";
import BabyForm from "./BabyForm";
import ImageSquareModal from "./ImageSquareModal";
import RatingIcons from "./RatingIcons";

// const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   border-radius: 5px;
// `;

const ProjectName = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  color: green;
`;

const InfoText = styled.div`
  font-size: 12px; // Adjust as needed
  color: #333; // Adjust color as needed
  margin: 5px 0; // Spacing between text elements
`;

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  padding: 20px 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const BabyIMG = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid #494949; // Border color
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

const Description = styled(InfoText)`
  font-size: 10px; // Smaller font size for longer text
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const Title = styled.h2`
  font-size: 1.5em; /* Title font size */
  text-transform: uppercase; /* Uppercase title */
  margin-bottom: 0.5em; /* Spacing after title */
`;

const Subtitle = styled.p`
  font-size: 1em; /* Subtitle font size */
  margin-bottom: 0.5em; /* Spacing after subtitle */
`;

const Image = styled.img`
  width: 80%; /* Adjust as needed */
  border-radius: 10px; /* Rounded corners for the image */
`;

const StyledButton = styled.button``;

const ImageSquare = ({ baby }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   console.log(baby);
  const [rating, setRating] = useState(0); // Initial rating state

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update the rating state
  };
  return (
    <>
      <Square>
        <BabyIMG>{baby.projectName}</BabyIMG>
        {/* {baby.illustrationUrl && (
          <Image src={baby.illustrationUrl} alt={baby.character} />
        )} */}
        {/* <ProjectName>{baby.projectName}</ProjectName> */}
        {/* <Description title={baby.projectDescription}>
          {baby.projectDescription}
        </Description> */}
        {/* {baby.projectURL && (
          <Link href={baby.projectURL} target="_blank">
            Visit Project
          </Link>
        )} */}
        {/* <InfoText>Character: {baby.character}</InfoText>
        <InfoText>Target Audience: {baby.targetAudience}</InfoText>
        <InfoText>Market Potential: {baby.marketPotential}</InfoText>
        <InfoText>Problem/Solution: {baby.problemSolution}</InfoText>
        <InfoText>
          Unique Differentiators: {baby.uniqueDifferentiators}
        </InfoText>
        <InfoText>Business Model: {baby.businessModel}</InfoText>
        <InfoText>Feedback Requested: {baby.specificFeedback}</InfoText> */}
        <RatingIcons value={rating} onChange={handleRatingChange} />
        <StyledButton onClick={() => setIsModalOpen(true)}>
          Judge The Baby
        </StyledButton>
      </Square>

      <ImageSquareModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // Pass any other props you might need
      />
    </>
  );
};

export default ImageSquare;
