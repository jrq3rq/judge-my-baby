import React, { useState } from "react";
import styled, { css } from "styled-components";
import { updateRating } from "../features/babyData/babyDataSlice"; // Adjust the import path as necessary
import RatingIcons from "./RatingIcons";
import { FaBaby } from "react-icons/fa"; // Import FaBaby icon
import { useDispatch } from "react-redux";

const ModalCardContainer = styled.div`
  background-color: #fff; // Bright and clean background
  border: 2px solid #f471b5; // Make the border more pronounced
  border-radius: 15px; // Soften the edges
  padding: 25px;
  margin: 20px auto; // Center the card with some margin
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth */
  text-align: center;
  /* transition: transform 0.2s ease-in-out; // Smooth transition for interaction */

  /* &:hover {
    transform: translateY(-5px); // Slight raise effect on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // Enhance shadow on hover
  } */
`;

const BabyIMG = styled.div`
  height: 150px;
  width: 150px;
  margin: auto; // Center in the container
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; // Add some space below the icon

  svg {
    fill: ${({ color }) =>
      color || "#000"}; // Default to black if no color is provided
    /* fill: #000; // Apply the theme color to the icon */
    /* fill: #f471b5; // Apply the theme color to the icon */
    width: 80px; // Adjust icon size
    height: 80px;
  }
`;

const DetailButton = styled.button`
  background-color: #f471b5; // Theme color
  color: #ffffff; // Contrast for readability
  border: none;
  border-radius: 20px; // Rounded edges
  padding: 10px 20px;
  font-weight: 600; // Bold text
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #d94087; // Darken on hover for feedback
    transform: scale(1.05); // Slightly enlarge the button
  }
`;

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
  margin-top: 20px;
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
const ModalCard = ({ baby }) => {
  const dispatch = useDispatch();
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleRatingChange = (newRating) => {
    dispatch(updateRating({ id: baby.id, rating: newRating }));
  };

  const toggleDetails = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  // Function to handle the delete action

  if (!baby) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ContentRow>
        <Column>
          <HighlightableText key={baby.id}>
            {baby.projectName}
          </HighlightableText>
        </Column>
        <Column>
          <Section key={baby.id}>
            <Header>{baby.projectName}</Header>
            <Text>
              {baby.projectDescription} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates fuga magnam, unde cumque quas
              deserunt quos nemo commodi repudiandae! Sunt enim vel totam et
              voluptatem aliquid quas ipsam libero incidunt odit laborum
              officiis soluta mollitia molestias, consequuntur fuga nesciunt
              molestiae. Consequuntur, perferendis. Eos eius, corrupti
              accusantium consectetur soluta ipsum? Eligendi ex nam nobis
              tenetur quisquam corporis nulla aut sit, quidem iste quam
              voluptate? Et non, magni numquam minima distinctio fugiat aliquid
              soluta placeat voluptatibus voluptatum explicabo, accusamus, hic
              fuga sapiente provident repellat! Officiis obcaecati voluptate.
            </Text>
            <BabyIMG color={baby.color}>
              <FaBaby />
            </BabyIMG>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              eveniet, voluptates dolor culpa dolores ipsa atque qui unde iste,
              eligendi ad animi commodi maiores accusantium blanditiis, mollitia
              vel officiis nostrum dolorum labore odio alias enim voluptate
              quod! Est accusamus nostrum eaque ratione beatae debitis porro
              perferendis eum dignissimos inventore laboriosam maxime modi
              dolores rem perspiciatis officiis impedit deleniti quae
              praesentium, adipisci accusantium dolore voluptate nihil
              assumenda? Amet, natus facilis dolor omnis ratione eius nobis
              porro? Inventore, aperiam ad. Esse exercitationem unde aliquid,
              aliquam ipsam eveniet fuga corporis dolorum excepturi alias est,
              numquam recusandae omnis! Explicabo a unde cumque aperiam,
              consequuntur itaque, ad ipsum quidem tempore exercitationem sequi
              laudantium aspernatur nam blanditiis vel velit ipsam, distinctio
              praesentium dicta voluptatibus incidunt architecto eveniet? Eos
              aperiam, fugit delectus hic ratione voluptas, esse voluptatibus
              eius cum, odio nostrum aliquam voluptatum? Tempore quisquam, porro
              odit molestias animi veritatis, nulla esse voluptates quasi
              quaerat iste libero.
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              exercitationem asperiores dolore, maxime repudiandae eligendi
              voluptatem et. Necessitatibus magni autem explicabo quis est
              voluptates excepturi nam ad illo culpa! Corrupti quos deserunt
              odit sit. Consequatur, ipsa sit itaque consectetur distinctio
              ducimus asperiores enim. Amet illum aperiam ipsum veritatis
              voluptatem velit, quisquam officiis aliquam suscipit, ducimus
              sequi dolorem facere deserunt numquam harum ad optio. Tempora
              voluptate laborum eum, alias asperiores iure. Doloremque quos
              beatae suscipit laborum omnis nemo tempore unde, provident
              consequatur ut possimus, quis, sequi odio blanditiis impedit quo
              sapiente harum veritatis architecto illo dolorum corrupti corporis
              sed officia? Minus?
            </Text>
          </Section>
        </Column>
      </ContentRow>
      <RatingRow>
        <RatingIcons />
      </RatingRow>
    </Container>
  );
};

export default ModalCard;
