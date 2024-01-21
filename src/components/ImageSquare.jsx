// components/ImageSquare.jsx
import React from "react";
import styled from "styled-components";

const Square = styled.div`
  background-color: #eee; // Placeholder color
  height: 0;
  padding-bottom: 100%; // Makes the div square
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc; // Placeholder border

  &:hover {
    opacity: 0.7;
  }
`;

const ImageSquare = () => {
  const handleClick = () => {
    // Implement your logic to handle click here
    console.log("Square clicked!");
  };

  return <Square onClick={handleClick} />;
};

export default ImageSquare;
