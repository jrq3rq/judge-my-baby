import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBabyData } from "../features/babyData/babyDataSlice";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #cccccc;
  /* background: rgba(255, 250, 250, 0.95); */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 10;
`;

const ModalBackground = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border: 2px solid #f471b5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    padding: 0px;
  }
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
  /* &:hover {
    background-color: #d0619f;
  } */
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
  flex-grow: 8; // 70% of the space
  /* border: 2px solid #f471b5; */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    border: 1px solid #cccccc;
    background-color: #b8e4f9;
    color: #000;
  }
`;

const SecondaryButton = styled(Button)`
  flex-grow: 2; // 30% of the space
  background-color: #f471b5;
  border: 1px solid #f471b5;
  &:hover {
    background-color: #b8e4f9;
    border: 1px solid #cccccc;
    color: #000;
  }
`;

const BabyForm = ({ onFormSubmit, toggleForm, showForm }) => {
  const [character, setCharacter] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [marketPotential, setMarketPotential] = useState("");
  const [problemSolution, setProblemSolution] = useState("");
  const [uniqueDifferentiators, setUniqueDifferentiators] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [specificFeedback, setSpecificFeedback] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formattedURL = projectURL;
    if (
      !projectURL.startsWith("http://") &&
      !projectURL.startsWith("https://")
    ) {
      formattedURL = `https://${projectURL}`;
    }
    const formData = {
      character,
      color, // Include this color in the formData
      projectName,
      projectDescription,
      projectURL: formattedURL, // Use the formatted URL
      targetAudience,
      marketPotential,
      problemSolution,
      uniqueDifferentiators,
      businessModel,
      specificFeedback,
    };
    dispatch(addBabyData(formData));
    toggleForm();
  };
  const handleURLChange = (e) => {
    setProjectURL(e.target.value);
  };

  const handleURLBlur = () => {
    if (
      projectURL &&
      !projectURL.startsWith("http://") &&
      !projectURL.startsWith("https://")
    ) {
      setProjectURL(`https://${projectURL}`);
    }
  };

  const archetypeColors = {
    Rebel: "#F0822A",
    Magician: "#F1AC2A",
    Hero: "#FDE802",
    Creator: "#362D93",
    Ruler: "#0474BC",
    Caregiver: "#00A6DF",
    Innocent: "#1A7349",
    Sage: "#35B276",
    Explorer: "#A8CC67",
    Lover: "#9F228F",
    Joker: "#ED2F3E", // Assuming "Joker" is meant for "Jester"
    Everyman: "#E70E7D",
  };
  const color = archetypeColors[character] || "#defaultColor"; // Fallback color if none is found

  return (
    <ModalBackground show={showForm}>
      <ModalContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
          <Input
            type="url"
            placeholder="https://example.com"
            value={projectURL}
            onChange={handleURLChange}
            onBlur={handleURLBlur} // Format URL when input loses focus
          />
          <Select
            onChange={(e) => setTargetAudience(e.target.value)}
            value={targetAudience}
          >
            <option value="">Select Target Audience</option>
            <option value="General Consumer">General Consumer</option>
            <option value="Businesses/Enterprises">
              Businesses/Enterprises
            </option>
            <option value="Tech Enthusiasts">Tech Enthusiasts</option>
            <option value="Students/Educational">Students/Educational</option>
            <option value="Healthcare Professionals">
              Healthcare Professionals
            </option>
            <option value="Creative Professionals">
              Creative Professionals
            </option>
            <option value="Seniors">Seniors</option>
            <option value="Parents/Families">Parents/Families</option>
            <option value="Youth/Teens">Youth/Teens</option>
            <option value="Environmentalists">Environmentalists</option>
            <option value="Others">Others (Niche or Specific)</option>
          </Select>
          <Input
            type="text"
            placeholder="Market Potential"
            value={marketPotential}
            onChange={(e) => setMarketPotential(e.target.value)}
          />
          <Textarea
            placeholder="Problem & Solution"
            value={problemSolution}
            onChange={(e) => setProblemSolution(e.target.value)}
          />

          <Textarea
            placeholder="Unique Differentiators"
            value={uniqueDifferentiators}
            onChange={(e) => setUniqueDifferentiators(e.target.value)}
          />
          <Select
            onChange={(e) => setBusinessModel(e.target.value)}
            value={businessModel}
          >
            <option value="">Select Business Model</option>
            <option value="Product Sales">Product Sales</option>
            <option value="Service Provider">Service Provider</option>
            <option value="Subscription-Based">Subscription-Based</option>
            <option value="Freemium Model">Freemium Model</option>
            <option value="Advertising-Based">Advertising-Based</option>
            <option value="Affiliate Marketing">Affiliate Marketing</option>
            <option value="Direct Sales">Direct Sales</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Franchise">Franchise</option>
            <option value="Dropshipping">Dropshipping</option>
            <option value="Others">Others (Unique or Specific)</option>
          </Select>
          <Textarea
            placeholder="Specific Feedback Requested"
            value={specificFeedback}
            onChange={(e) => setSpecificFeedback(e.target.value)}
          />
          <Select
            onChange={(e) => setCharacter(e.target.value)}
            value={character}
          >
            <option value="">Select your business persona</option>
            <option value="Rebel">
              Rebel - Disruptive, Edgy, Revolutionary
            </option>
            <option value="Magician">
              Magician - Transformative, Visionary, Charismatic
            </option>
            <option value="Hero">Hero - Bold, Courageous, Strong</option>
            <option value="Creator">
              Creator - Innovative, Imaginative, Artistic
            </option>
            <option value="Ruler">
              Ruler - Authoritative, Influential, Powerful
            </option>
            <option value="Caregiver">
              Caregiver - Nurturing, Supportive, Compassionate
            </option>
            <option value="Innocent">Innocent - Pure, Ethical, Trusted</option>
            <option value="Sage">Sage - Wise, Knowledgeable, Advisor</option>
            <option value="Explorer">
              Explorer - Adventurous, Independent, Pioneer
            </option>
            <option value="Lover">Lover - Passionate, Sensual, Intimate</option>
            <option value="Joker">Joker - Fun, Humorous, Light-Hearted</option>
            <option value="Everyman">
              Everyman - Relatable, Down-to-Earth, Real
            </option>
          </Select>
          <ButtonContainer>
            <PrimaryButton type="submit">Upload Baby</PrimaryButton>
            <SecondaryButton onClick={toggleForm}>Close</SecondaryButton>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default BabyForm;
