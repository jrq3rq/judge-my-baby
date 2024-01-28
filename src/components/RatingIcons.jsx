import React from "react";
import styled from "styled-components";
import {
  FaRegAngry,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegGrinHearts,
} from "react-icons/fa";

const RatingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#f472b6" : "#000")};
  margin: 0 5px;
  font-size: 24px;

  &:hover {
    color: #f472b6;
  }
`;

const iconValues = [
  { icon: FaRegAngry, value: 1 },
  { icon: FaRegFrown, value: 2 },
  { icon: FaRegMeh, value: 3 },
  { icon: FaRegSmile, value: 4 },
  { icon: FaRegGrinHearts, value: 5 },
];

const RatingIcons = ({ value, onChange }) => {
  return (
    <RatingsContainer>
      {iconValues.map((iconObj, index) => (
        <IconWrapper
          key={index}
          isSelected={value === iconObj.value}
          onClick={() => onChange(iconObj.value)}
        >
          <iconObj.icon />
        </IconWrapper>
      ))}
    </RatingsContainer>
  );
};

export default RatingIcons;
