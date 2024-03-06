import React, { useState } from "react";
import styled, { css } from "styled-components";
import { updateRating } from "../features/babyData/babyDataSlice"; // Adjust the import path as necessary
import RatingIcons from "./RatingIcons";
import { FaBaby } from "react-icons/fa"; // Import FaBaby icon
import ModalCard from "./ModalCard";
import { useSelector, useDispatch } from "react-redux";

// Adjust the import path as necessary

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
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  &:nth-child(1) {
    flex: 20%;
  }
  &:nth-child(2) {
    flex: 80%;
  }
  /* &:nth-child(3) {
    flex: 15%;
  } */
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

const ProjectEvaluation = ({ baby }) => {
  const [activeBabyIndex, setActiveBabyIndex] = useState(null);
  const [score, setScore] = useState(0);
  const babies = useSelector((state) => state.babyData.babies);
  const dispatch = useDispatch();

  const handleRatingChange = (babyId, newRating) => {
    dispatch(updateRating({ id: babyId, rating: newRating }));
  };

  return (
    <Container>
      <ContentRow>
        <Column>
          {babies.map((baby, index) => (
            <HighlightableText
              key={baby.id}
              isActive={activeBabyIndex === index}
              onClick={() => setActiveBabyIndex(index)}
            >
              {baby.projectName}
            </HighlightableText>
          ))}
        </Column>
        <Column>
          {babies.map((baby, index) => (
            <Section
              key={baby.id}
              className={activeBabyIndex === index ? "active" : ""}
            >
              <Header>{baby.projectName}</Header>
              <Text>{baby.projectDescription}</Text>
            </Section>
          ))}
        </Column>
      </ContentRow>
      <RatingRow>
        <RatingIcons score={score} onChange={setScore} />
      </RatingRow>
    </Container>
  );
};

export default ProjectEvaluation;
