// ImageSquareModal.jsx
import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Dimmed background
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const ImageSquareModal = ({ show, onClose, ...otherProps }) => {
  // Modal logic and JSX structure here

  return (
    <ModalBackground show={show}>
      <ModalContainer>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ImageSquareModal;
