import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Homepage";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleSignIn = (credentials) => {
    // Replace with your authentication logic
    // If the user is authenticated:
    setIsAuthenticated(true);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {!isAuthenticated ? (
          <HomePage onSignIn={handleSignIn} />
        ) : (
          <Dashboard />
        )}
      </AppContainer>
    </>
  );
};

export default App;
