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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     character,
  //     projectName,
  //     projectDescription,
  //     projectURL,
  //     targetAudience,
  //     marketPotential,
  //     problemSolution,
  //     uniqueDifferentiators,
  //     businessModel,
  //     specificFeedback,
  //   };
  //   if (typeof onFormSubmit === "function") {
  //     onFormSubmit(formData);
  //   }
  //   dispatch(addBabyData(formData));
  //   toggleForm();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      character,
      projectName,
      projectDescription,
      projectURL,
      targetAudience,
      marketPotential,
      problemSolution,
      uniqueDifferentiators,
      businessModel,
      specificFeedback,
    };

    // Log formData to console to verify its structure and content
    // console.log("Form Data:", formData);

    dispatch(addBabyData(formData));
    toggleForm();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     character,
  //     projectName,
  //     projectDescription,
  //     projectURL,
  //     targetAudience,
  //     marketPotential,
  //     problemSolution,
  //     uniqueDifferentiators,
  //     businessModel,
  //     specificFeedback,
  //   };
  //   if (typeof onFormSubmit === "function") {
  //     onFormSubmit(formData);
  //     console.log("Updated babyData in BabyForm:", formData); // Check the updated state
  //   }
  // };

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
            placeholder="Project URL"
            value={projectURL}
            onChange={(e) => setProjectURL(e.target.value)}
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
            <option value="Rebel">
              Rebel - Disruptive, Edgy, Revolutionary
            </option>
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
            <PrimaryButton type="submit">Upload Creation</PrimaryButton>
            <SecondaryButton onClick={toggleForm}>Close</SecondaryButton>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default BabyForm;
