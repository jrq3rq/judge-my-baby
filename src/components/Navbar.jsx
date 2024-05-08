import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { sortByNewest } from "../features/babyData/babyDataSlice"; // Ensure the correct import path
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { clearUser } from "../features/user/userSlice";

// Styled Components
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 20px auto;
  max-width: 100%;
  width: 80%;
  border-radius: 8px;
  /* background-color: #f8f9fa; */
  /* border: 4px solid #1a1a1a; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.3rem 0.5rem;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const SortSelect = styled.select`
  padding: 0.5em 1em;
  border-radius: 6px;
  border: 3px solid #1a1a1a;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  font-size: 0.9rem;

  &:hover {
    border-color: #1a1a1a;
  }

  &:focus {
    border-color: #1a1a1a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.3em 0.8em;
    font-size: 0.8rem;
  }
`;

const EmailDisplay = styled.div`
  padding: 0.5em 1em;
  border-radius: 6px;
  border: 3px solid #1a1a1a;
  background-color: #f471b5;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.3em 0.8em;
    font-size: 0.8rem;
  }
`;

const SignOutButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 6px;
  border: 3px solid #1a1a1a;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  font-size: 0.9rem;

  &:hover {
    border-color: #1a1a1a;
  }

  &:focus {
    border-color: #1a1a1a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.3em 0.8em;
    font-size: 0.8rem;
  }
`;

const Navbar = ({ onArchetypeSelect, babies }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.user?.email);

  const handleSortChange = (e) => {
    // Handle sort change
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
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
      <Section>
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
      </Section>
      <Section>
        {userEmail && <EmailDisplay>{userEmail}</EmailDisplay>}
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      </Section>
    </Nav>
  );
};

export default Navbar;
