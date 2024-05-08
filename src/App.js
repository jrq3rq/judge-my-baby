import React, { useEffect } from "react";
import { styled, createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./features/user/userSlice";
import Dashboard from "./pages/Dashboard";
import SignIn from "./assets/Auth/SignIn";
import { auth } from "./services/firebase";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(clearUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>{!user ? <SignIn /> : <Dashboard />}</AppContainer>
    </>
  );
};

export default App;
