import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import BabyForm from "./components/BabyForm";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`;

const Sidebar = styled.div`
  display: flex; // Set the sidebar as a flex container
  flex-direction: column; // Align items vertically
  align-items: center; // Center items horizontally
  gap: 15px; // Add a gap between items
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  top: 0;
  width: 250px;
  height: 100%;
  /* background-color: #f3f3f3; */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 1px solid #ccc;
  /* border-left: 1px solid #494949; */
  padding: 20px 0; // Add padding at the top and bottom
  transition: right 0.3s ease;
  z-index: 9;
  @media screen and (max-width: 1080px) {
    width: 220px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #494949;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 11;

  &:hover {
    color: #cccccc;
  }
  @media screen and (max-width: 1080px) {
    top: 10px;
    left: 5px;
  }
`;

const ButtonsContainer = styled.div`
  height: 90%;
  padding: 10px;
  border-radius: 10px;
  /* background-color: pink; */
  background-color: #ffffff;
  border: 1px solid #ccc;
  /* border: 1px solid #494949; */
  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const IconButton = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  color: #cccccc;
  /* color: #4caf50; */
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #494949;
  }
  @media screen and (max-width: 480px) {
  }
`;

const CreateButton = styled.button`
  padding: 10px 15px;
  background-color: #eeeeee;
  /* background-color: #4caf50; */
  color: #494949;
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  /* border: 1px solid #494949; */
  cursor: pointer;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); */
  transition: background-color 0.3s;
  z-index: 10;
  &:hover {
    background-color: #cccccc;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the form
  const [babyData, setBabyData] = useState([]);
  const [submissions, setSubmissions] = useState([]);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Function to toggle the form's visibility
  };

  return (
    <AppContainer>
      <IconButton onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </IconButton>

      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon size={24} onClick={toggleSidebar} />
        <ButtonsContainer>
          <CreateButton>Dummy Button</CreateButton>
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
