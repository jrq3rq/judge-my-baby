import React, { useState, useEffect } from "react"; // Import useEffect
import styled from "styled-components";
import ImageSquare from "./ImageSquare";
import { useSelector } from "react-redux";
import { FaBaby } from "react-icons/fa";
import babyImage from "../assets/images/DalleIMG4.png";
import Navbar from "./Navbar";

const PlaceholderSquare = styled.div`
  background-color: transparent; // No background color
  /* border: 1px dashed #f471b5; */
  border: 8px dashed #1a1a1a;
  /* border: 1px dashed #f471b5; */
  border-radius: 5px;
  aspect-ratio: 1 / 1; // Maintain square aspect ratio
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Adjust as per your layout
  grid-gap: 16px;
  padding: 16px;
  margin: 40px 40px 40px 40px;

  @media (max-width: 1024px) {
    margin: 40px 20px 40px 20px;
    grid-template-columns: repeat(3, 1fr); // Medium screens - 3 columns
  }

  @media (max-width: 768px) {
    /* margin: 0px 0px 0px 0px; */

    grid-template-columns: repeat(2, 1fr); // Small screens - 2 columns
  }
`;

const BabyImage = styled.img`
  max-width: 100%; // Ensure the image's width does not exceed the parent's width
  max-height: 100%; // Ensure the image's height does not exceed the parent's height
  object-fit: cover; // Cover the parent's content box, might crop the image
  border-radius: 50%; // Optional: if you want the image to be circular
  display: block; // Remove any default inline spacing
`;

const CreateButton = styled.button`
  position: relative;
  width: 100%; // Specify the width
  height: 100%; // Specify the height
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid #ccc;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #fff; // Default background
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Elevate button on hover
    &::after {
      transform: scale(1.5); // Enlarge the "+" sign
      color: #f471b5; // Change color to black on hover
    }
  }
  &::after {
    content: "+";
    position: absolute;
    font-size: 2rem; // Adjust the size of the "+"
    color: #fff; // Initial color of the "+"
    transition: transform 0.3s ease, color 0.3s ease; // Ensure color transition
    z-index: 1;
  }
`;

const Gallery = ({ onImageClick, onButtonClick }) => {
  const [selectedArchetype, setSelectedArchetype] = useState("");
  const babies = useSelector((state) => state.babyData.babies);

  // Filter babies based on the selected archetype (not character)
  const filteredBabies = selectedArchetype
    ? babies.filter(
        (baby) =>
          baby.character &&
          baby.character.toLowerCase() === selectedArchetype.toLowerCase()
      )
    : babies;

  // Adjust the number of placeholders based on filtered results
  const adjustedNumPlaceholders = Math.max(0, 7 - filteredBabies.length);

  // Debugging: Log each baby's id and archetype
  useEffect(() => {
    console.log("Logging babies and their archetypes:");
    babies.forEach((baby) => {
      console.log(baby.id, baby.archetype);
    });
  }, [babies]); // Re-run the effect only if the babies array changes

  return (
    <>
      <Navbar onArchetypeSelect={setSelectedArchetype} babies={babies} />

      <GalleryContainer>
        <CreateButton onClick={onButtonClick} aria-label="Create Your Baby">
          <BabyImage src={babyImage} alt="Create new baby project" />
        </CreateButton>
        {filteredBabies.map((baby, index) => (
          <ImageSquare
            key={index}
            baby={baby}
            onClick={() => onImageClick && onImageClick(baby)}
          />
        ))}
        {/* Render placeholders only if needed */}
        {[...Array(adjustedNumPlaceholders)].map((_, index) => (
          <PlaceholderSquare key={`placeholder-${index}`} />
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
