// ImageSquareModal.jsx
import React from "react";
import styled from "styled-components";
import ModalCard from "./ModalCard";

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
  background-color: #fff;
  border: 2px solid #f471b5;
  padding: 24px;
  border-radius: 15px;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); */
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
  display: flex; // Set the button as a flex container
  justify-content: flex-end; // Align children (like InteractionIcon) to the right
  align-items: center; // Optional: Align children vertically in the center
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  width: 100%;
  top: 0;
`;

const ImageSquareModal = ({ show, onClose, baby }) => {
  return (
    <ModalBackground show={show}>
      <ModalContainer>
        <InteractionButton onClick={onClose}>✕</InteractionButton>
        <ModalCard baby={baby} />
        {/* Additional modal content */}
      </ModalContainer>
    </ModalBackground>
  );
};

export default ImageSquareModal;
