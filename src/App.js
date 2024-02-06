import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import BabyForm from "./components/BabyForm";
import { FaBars, FaTimes } from "react-icons/fa";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: fixed;
  right: ${({ isOpen }) =>
    isOpen ? "0" : "-300px"}; /* Adjust width for smoother animation */
  top: 0;
  width: 300px; /* Increased width for better visual */
  height: 100vh; /* Full height */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: right 0.5s ease-in-out; /* Smoother transition */
  padding: 20px;
  border-left: 1px solid #000;
  background-color: #f472b6;

  /* background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  ); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000; /* High z-index to ensure it's above all other components */
`;

const CloseIcon = styled(FaTimes)`
  align-self: flex-start; /* Align close icon to the start */
  margin-bottom: 20px; /* Spacing */
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 92%;
  width: 80%; /* Full width */
  align-items: center;
  gap: 10px;
  /* border: 1px solid #ccc; */
  padding: 10px;
  border-radius: 5px;
`;

const CreateButton = styled.button`
  padding: 12px 20px;
  color: #fff; /* Text color */
  background-color: #f471b5;
  border-radius: 5px;
  width: 100%; /* Button width */
  font-weight: 600; /* Bold text */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f471b5;
  &:hover {
    transform: translateY(-2px); /* Lift effect */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Shadow on hover */
    border: 2px solid #000;
  }
`;

const IconButton = styled.div`
  position: fixed;
  top: 20px;
  left: 10px;
  color: #fff;
  /* color: #4caf50; */
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #000;
  }
  @media screen and (max-width: 480px) {
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the form
  const [babyData, setBabyData] = useState([]); // This state might need adjustment based on your implementation in ParentComponent

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleForm = () => setShowForm(!showForm); // Toggles form visibility
  // const [submissions, setSubmissions] = useState([]);
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (baby) => {
    setSelectedBaby(baby);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    setBabyData([...babyData, formData]);
    setShowForm(false); // Close the form after submission
  };

  return (
    <AppContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <IconButton onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </IconButton>
        <ButtonsContainer>
          <CreateButton>Dashboard</CreateButton>
          {/* <CreateButton>+ Submit New Project</CreateButton> */}
          <CreateButton>My Babies </CreateButton>
          {/* <CreateButton>Feedback Guidelines</CreateButton>
          <CreateButton>Engagement Metrics </CreateButton>
          <CreateButton>Settings & Support </CreateButton> */}
        </ButtonsContainer>
      </Sidebar>
      {showForm && (
        <BabyForm
          onFormSubmit={handleFormSubmit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <Gallery
        babyData={babyData}
        onImageClick={handleClick}
        onButtonClick={toggleForm}
      />
    </AppContainer>
  );
};

export default App;
