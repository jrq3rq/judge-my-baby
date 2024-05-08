import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { setUser } from "../../features/user/userSlice";
import { auth, googleProvider } from "../../services/firebase";
import styled, { keyframes } from "styled-components";
import babyImage from "../images/DalleIMG4.png";

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;
// Keyframe Animations
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const floatRotateAnimation = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(45deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  position: relative;
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${({ size }) => size || "80px"};
  height: ${({ size }) => size || "80px"};
  border: 3px solid #1a1a1a;
  border-radius: ${({ circle }) => (circle ? "50%" : "0%")};
  background-color: ${({ color }) => color || "white"};
  top: ${({ top }) => top || "10%"};
  left: ${({ left }) => left || "10%"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 0;
  animation: ${({ rotate }) => (rotate ? floatRotateAnimation : floatAnimation)}
    ${({ speed }) => speed || "5s"} ease-in-out infinite;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  border: 4px solid #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const BabyImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

// Define shape configurations
const shapes = [
  {
    size: "100px",
    top: "15%",
    left: "10%",
    speed: "4s",
    rotate: false,
    circle: true,
    color: "#EF822B",
  },
  {
    size: "60px",
    top: "15%",
    left: "65%",
    speed: "6s",
    rotate: true,
    circle: false,
    color: "#362D92",
  },
  {
    size: "80px",
    top: "70%",
    left: "75%",
    speed: "5s",
    rotate: false,
    circle: true,
    color: "#1B7249",
  },
  {
    size: "60px",
    top: "85%",
    left: "35%",
    speed: "7s",
    rotate: true,
    circle: false,
    color: "#9F228F",
  },
  {
    size: "40px",
    top: "55%",
    left: "15%",
    speed: "7s",
    rotate: true,
    circle: true,
    color: "#F1AC2A",
  },
  {
    size: "40px",
    top: "30%",
    left: "85%",
    speed: "5s",
    rotate: false,
    circle: false,
    color: "#0474BB",
  },
  {
    size: "100px",
    top: "10%",
    left: "40%",
    speed: "4s",
    rotate: true,
    circle: false,
    color: "#35B276",
  },
  {
    size: "50px",
    top: "70%",
    left: "10%",
    speed: "6s",
    rotate: false,
    circle: true,
    color: "#ED2F3D",
  },
  {
    size: "80px",
    top: "20%",
    left: "80%",
    speed: "8s",
    rotate: true,
    circle: true,
    color: "#FCE802",
  },
  {
    size: "60px",
    top: "45%",
    left: "50%",
    speed: "5s",
    rotate: false,
    circle: false,
    color: "#04A5DF",
  },
  {
    size: "50px",
    top: "75%",
    left: "60%",
    speed: "4s",
    rotate: true,
    circle: true,
    color: "#A8CC67",
  },
  {
    size: "70px",
    top: "25%",
    left: "20%",
    speed: "6s",
    rotate: false,
    circle: false,
    color: "#E70D7D",
  },
];

const SignIn = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <Container>
      {/* Render each floating shape */}
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          size={shape.size}
          top={shape.top}
          left={shape.left}
          speed={shape.speed}
          rotate={shape.rotate}
          circle={shape.circle}
          color={shape.color}
        />
      ))}

      {/* Sign-In Form */}
      <FormContainer>
        <BabyImage src={babyImage} alt="Create new baby project" />
        <Heading>Sign In</Heading>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SignInButton onClick={handleGoogleSignIn}>
          Sign in with Google
        </SignInButton>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
