import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

// Styled component for the button inside the LoginContainer
const LoginButton = styled.button`
  width: 300px;
  background-color: black;
  color: white;
  font-weight: 800;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// Styled component for the div that wraps the image in LoginContainer
const LoginImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styled component for the image inside LoginImageWrapper
const LoginImage = styled.img`
  object-fit: contain;
  height: 150px;
`;

// Assuming you have a React component for login
const Login = () => {
  return (
    <LoginContainer>
      <LoginImageWrapper>
        {/* Assuming you have an image URL or you can import it */}
        <LoginImage src="your-image-url-here" alt="Login" />
      </LoginImageWrapper>
      <LoginButton>Sign In</LoginButton>
    </LoginContainer>
  );
};

export default Login;
