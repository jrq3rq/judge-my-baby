import React, { useState } from "react";
import styled from "styled-components";
import RatingIcons from "./RatingIcons";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Card = styled.div`
  /* min-width: 300px; */
  margin: 10px;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  text-align: center;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const CardCarousel = () => {
  const yourFormDataArray = [
    {
      projectName: "Project",
      projectDescription: "Description of Project",
      // ... other project details
    },
    {
      projectName: "Attribute",
      projectDescription: "Description of Project Attribute 1",
      // ... other project details
    },
    {
      projectName: "Attribute",
      projectDescription: "Description of Project Attribute 2",
      // ... other project details
    },
    // ... more projects
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState(
    new Array(yourFormDataArray.length).fill(3)
  );

  const handleRatingChange = (index, newRating) => {
    const newRatings = [...ratings];
    newRatings[index] = newRating;
    setRatings(newRatings);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % yourFormDataArray.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + yourFormDataArray.length) % yourFormDataArray.length
    );
  };

  return (
    <CarouselContainer>
      <ArrowButton onClick={prevCard}>&lt;</ArrowButton>
      <CardContainer>
        {yourFormDataArray.map((item, index) => (
          <Card
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <h3>{item.projectName}</h3>
            <p>{item.projectDescription}</p>
            <RatingIcons
              value={ratings[index]}
              onChange={(newRating) => handleRatingChange(index, newRating)}
            />
          </Card>
        ))}
      </CardContainer>
      <ArrowButton onClick={nextCard}>&gt;</ArrowButton>
    </CarouselContainer>
  );
};

export default CardCarousel;
