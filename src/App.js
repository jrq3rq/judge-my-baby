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
  display: flex; // Set the sidebar as a flex container
  flex-direction: column; // Align items vertically
  align-items: center; // Center items horizontally
  gap: 15px; // Add a gap between items

  position: fixed;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  top: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 1px solid #cccccc;
  padding: 20px 0; // Add padding at the top and bottom
  transition: right 0.3s ease;
  z-index: 9;
  @media screen and (max-width: 1080px) {
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
  }
`;

const SlideOpenButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
  z-index: 10;

  &:hover {
    background-color: #388e3c;
  }
`;

const IconButton = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  color: #4caf50;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #388e3c;
  }
`;

const CreateButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
  z-index: 10;

  &:hover {
    background-color: #388e3c;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the form

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
        <CreateButton onClick={toggleForm}>Create Your Baby</CreateButton>
      </Sidebar>
      <Gallery />
      {showForm && <BabyForm toggleForm={toggleForm} />}
    </AppContainer>
  );
};

export default App;
