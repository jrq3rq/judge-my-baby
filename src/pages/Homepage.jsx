import React from "react";
import styled from "styled-components";
import { FaBaby } from "react-icons/fa"; // Import FaBaby icon

// Define your styled components here
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // This sets the container to fill the full viewport height
  overflow: auto; // Allows the content to scroll if it overflows the height
`;

const Header = styled.header`
  background: #f471b5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BabyIcon = styled(FaBaby)`
  font-size: 50px;
  color: #ff69b4;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  text-transform: uppercase;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
`;

const MainSection = styled.main`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  flex-grow: 1; // Allows this section to grow and fill any available space
  overflow: auto; // Allows the content to scroll if it overflows the height
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); // Adapts to the container's width

  @media (min-width: 1200px) {
    // for large screens
    grid-template-columns: repeat(6, 1fr); // 6 cards per row
  }

  @media (max-width: 1199px) {
    // for medium screens
    grid-template-columns: repeat(4, 1fr); // 4 cards per row
  }

  @media (max-width: 767px) {
    // for small screens
    grid-template-columns: repeat(3, 1fr); // 3 cards per row
  }

  @media (max-width: 480px) {
    // for extra small screens
    grid-template-columns: repeat(2, 1fr); // 2 cards per row
  }
`;

const BabyCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease; // For a hover effect
  border: 1px solid #f471b5;

  &:hover {
    transform: scale(1.05); // Slightly increase size on hover
  }
`;

const Footer = styled.footer`
  background: #f471b5;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

// Mock data for baby cards
const babies = new Array(24).fill(null).map((_, index) => ({
  id: index,
  name: `Baby ${index + 1}`,
}));

const HomePage = () => {
  return (
    <HomePageContainer>
      {/* <Header>
        <Logo>Judge My Baby</Logo>
        <SearchBar type="text" placeholder="Search" />
      </Header> */}
      <MainSection>
        {babies.map((baby) => (
          <BabyCard key={baby.id}>
            <BabyIcon />
            <div>{baby.name}</div> {/* Display the baby's name */}
          </BabyCard>
        ))}
      </MainSection>
      {/* <Footer>... footer content</Footer> */}
    </HomePageContainer>
  );
};

export default HomePage;
