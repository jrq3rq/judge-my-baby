import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: sticky;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid #cccccc;
  /* background: rgba(255, 250, 250, 0.95); */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 10;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f472b6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  margin: 5px;
  &:hover {
    background-color: #d0619f;
  }
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrimaryButton = styled(Button)`
  flex-grow: 7; // 70% of the space
  background-color: #f472b6;

  &:hover {
    background-color: #d0619f;
  }
`;

const SecondaryButton = styled(Button)`
  flex-grow: 3; // 30% of the space
  background-color: #6b7280;

  &:hover {
    background-color: #4b5563;
  }
`;

const BabyForm = ({ toggleForm }) => {
  const [character, setCharacter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // This should include sending the selected character along with other form data
    console.log("Form submitted with character: ", character);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Project Name" required />
      <Textarea placeholder="Project Description" required />
      <Input type="url" placeholder="Project URL" />
      <Select onChange={(e) => setCharacter(e.target.value)} value={character}>
        <option value="">Select your baby archetype</option>
        <option value="Innocent">Innocent - Pure, Ethical, Trusted</option>
        <option value="Everyman">
          Everyman - Relatable, Down-to-Earth, Real
        </option>
        <option value="Hero">Hero - Bold, Courageous, Strong</option>
        <option value="Caregiver">
          Caregiver - Nurturing, Supportive, Compassionate
        </option>
        <option value="Explorer">
          Explorer - Adventurous, Independent, Pioneer
        </option>
        <option value="Rebel">Rebel - Disruptive, Edgy, Revolutionary</option>
        <option value="Lover">Lover - Passionate, Sensual, Intimate</option>
        <option value="Creator">
          Creator - Innovative, Imaginative, Artistic
        </option>
        <option value="Jester">Joker - Fun, Humorous, Light-Hearted</option>
        <option value="Sage">Sage - Wise, Knowledgeable, Advisor</option>
        <option value="Magician">
          Magician - Transformative, Visionary, Charismatic
        </option>
        <option value="Ruler">
          Ruler - Authoritative, Influential, Powerful
        </option>
      </Select>

      <ButtonContainer>
        <PrimaryButton type="submit">Submit Creation</PrimaryButton>
        <SecondaryButton onClick={toggleForm}>Close</SecondaryButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default BabyForm;
