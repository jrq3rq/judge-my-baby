import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sortByNewest } from "../features/babyData/babyDataSlice"; // Ensure the correct import path

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end; // Align items to the right
  align-items: center;
  background-color: #f8f9fa; // A light grey background
  border: 1px solid #cccccc;
  padding: 0.5rem 0rem; // Add some padding around
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 60px;
  margin-bottom: 20px;
  margin-left: 60px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 35px;
    margin-bottom: 20px;
    margin-left: 35px;
  }
`;

const SortSelect = styled.select`
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    border-color: #bbbbbb;
  }

  &:focus {
    border-color: #aaaaaa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Navbar = ({ onArchetypeSelect, babies }) => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    // Handle sort change
  };

  // Extract unique character archetypes
  const uniqueArchetypes = Array.from(
    new Set(babies.map((baby) => baby.character))
  ).sort();

  // Handle archetype selection
  const handleArchetypeChange = (e) => {
    onArchetypeSelect(e.target.value);
  };

  return (
    <Nav>
      <SortSelect onChange={handleArchetypeChange}>
        <option value="">Show All</option>
        {uniqueArchetypes.map(
          (archetype) =>
            archetype && (
              <option key={archetype} value={archetype.toLowerCase()}>
                {archetype}
              </option>
            )
        )}
      </SortSelect>
    </Nav>
  );
};

export default Navbar;
