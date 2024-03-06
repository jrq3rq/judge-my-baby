import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components"; // Corrected import
import ModalCard from "./ModalCard";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import { deleteBaby } from "../features/babyData/babyDataSlice";
import { useDispatch } from "react-redux";
import ProjectEvaluation from "./ProjectEvaluation";

// Animation for modal appearance
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalBackground = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); // Slightly darker for more focus on modal
  align-items: center;
  justify-content: center;
  z-index: 1000; // Ensure it's above everything
`;

const ModalContainer = styled.div`
  background: #fff;
  border: 2px solid #f471b5; // Retain the brand color for consistency
  padding: 24px;
  border-radius: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
  position: relative;
  max-width: 600px;
  max-height: 80vh;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); // Soft shadow for depth
  animation: ${fadeIn} 0.5s ease-out;
`;

const InteractionButton = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #333;
  font-size: 24px;
  transition: color 0.2s;

  &:hover {
    color: #f471b5; // Highlight on hover for intuitive feedback
  }
`;

const DeleteIcon = styled(FaTrashAlt)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: #f471b5; // Brand color for consistency
  font-size: 24px;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1); // Slightly enlarge on hover for emphasis
    color: ${({ color }) => color}; // Darken for feedback
  }
`;

const ConfirmationModalBackground = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  z-index: 1050;
  /* animation: ${fadeIn} 0.3s ease-out; */
`;

const ConfirmationModalContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd; // Subtle border
  border-radius: 10px; // Rounded corners for a modern look
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; // Space between elements
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); // Soft shadow for depth
`;

const ConfirmationText = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center; // Ensure text is centered
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Center buttons horizontally
  gap: 10px; // Creates space between buttons
`;

const ConfirmationButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px; // Adds horizontal space between buttons
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.confirm &&
    css`
      background-color: #f471b5; // Or any specific color for confirmation
      &:hover {
        background-color: darken(#f471b5, 10%);
      }
    `}

  &:not(:first-child) {
    margin-left: 10px; // Adjust space as needed
  }
`;

// Ensure the rest of your component stays the same
const ImageSquareModal = ({ show, onClose, baby }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    setShowConfirmation(true); // Show confirmation on delete click
  };

  const handleConfirmDelete = () => {
    dispatch(deleteBaby(baby.id));
    setShowConfirmation(false); // Close confirmation modal
    onClose(); // Close the main modal
  };

  return (
    <>
      <ModalBackground show={show}>
        <ModalContainer>
          <InteractionButton onClick={onClose} />
          <DeleteIcon onClick={handleDeleteClick} color={baby.color} />
          <ModalCard baby={baby} />
        </ModalContainer>
      </ModalBackground>
      <ConfirmationModalBackground isVisible={showConfirmation}>
        <ConfirmationModalContainer>
          <ConfirmationText>
            Are you sure you want to delete this baby?
          </ConfirmationText>
          <ButtonContainer>
            <ConfirmationButton confirm onClick={handleConfirmDelete}>
              Yes, delete it
            </ConfirmationButton>
            <ConfirmationButton onClick={() => setShowConfirmation(false)}>
              Cancel
            </ConfirmationButton>
          </ButtonContainer>
        </ConfirmationModalContainer>
      </ConfirmationModalBackground>
    </>
  );
};

export default ImageSquareModal;
