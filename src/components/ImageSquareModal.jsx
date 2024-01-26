// ImageSquareModal.jsx
import React, { useState } from "react";
import styled from "styled-components";

const ContainerBabyCard = styled.div`
  display: flex;
  flex-direction: start;
  align-items: flex-start;
`;

// The image within the featured card
const FeaturedImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-top: -50px; // Adjust based on actual layout
`;

// Smaller baby cards for additional illustrations
const BabyCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Baby thumbnail image
const BabyThumbnail = styled.img`
  width: 80px; // Adjust based on actual layout
  height: 80px; // Adjust to maintain aspect ratio
  border-radius: 10px;
`;

// Score slider container
const ScoreSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Individual score slider
const ScoreSlider = styled.input.attrs({ type: "range" })`
  width: 100%;
  margin: 8px 0;
`;

// Interaction icon, assuming you're using a library like react-icons
const InteractionIcon = styled.i`
  font-size: 24px; // Adjust based on actual layout
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack vertically on smaller screens
  gap: 16px;
  padding: 16px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; // Row layout for larger screens
    flex-wrap: wrap; // Wrap items if needed
  }
`;

const LargeFeaturedCard = styled.div`
  width: 100%;
  height: 375px;
  background: yellow; // Or any background you prefer
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px; // Space between this card and the ones below
`;

const KingContainer = styled.div`
  display: flex;
  background-color: pink;
  justify-content: space-evenly;
  width: 100%; // Full width of its parent
  overflow: auto; // Scroll if content overflows
`;
const LeftSide = styled.div`
  width: 100%; // Full width of its parent
`;
const RightSide = styled.div`
  width: 100%; // Full width of its parent
`;

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
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  height: 80%;
  width: 80%;
  max-width: 960px;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FeaturedCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const LargeCard = styled.div`
  width: 100%;
  height: 375px;
  background: yellow;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const InteractionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin: 4px;
`;

const ImageSquareModal = ({ show, onClose, children }) => {
  return (
    <ModalBackground show={show}>
      <ModalContainer>
        {/* Placeholder for modal content; you can replace this with actual content */}
        {children}

        {/* Close button */}
        <InteractionButton onClick={onClose}>
          <InteractionIcon>✕</InteractionIcon>{" "}
          {/* Replace with actual icon from library */}
          <KingContainer>
            {" "}
            <LeftSide>
              {" "}
              <LargeFeaturedCard>
                {/* Content for the large featured card */}
              </LargeFeaturedCard>
              <MainContainer>
                <FeaturedCard>
                  {/* Other content for the featured card like title, description, etc. */}
                  {[...Array(8)].map(
                    (
                      _,
                      index // Assuming you want to show 9 baby cards
                    ) => (
                      <BabyCard key={index}>
                        <BabyThumbnail
                          src={require("../assets/images/512x512.png")}
                          alt="Featured Baby"
                        />
                        {/* Other content for each baby card like title, score, etc. */}
                        <ScoreSliderContainer>
                          <ScoreSlider />
                        </ScoreSliderContainer>
                      </BabyCard>
                    )
                  )}
                </FeaturedCard>
                {/* Example of smaller baby cards in a grid */}
              </MainContainer>
            </LeftSide>
          </KingContainer>
        </InteractionButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ImageSquareModal;
