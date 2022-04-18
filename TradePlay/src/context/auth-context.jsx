import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { userDataReducer } from "./auth-reducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const initialUserData = {
    token: "",
    history: [],
    playlists: [],
    likes: [],
  };

  useEffect(() => {});

  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );

  return (
    <AuthContext.Provider value={{ userDataState, userDataDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
