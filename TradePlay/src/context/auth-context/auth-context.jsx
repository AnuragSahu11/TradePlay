import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialUserData } from "../../utils/constants";
import { userDataReducer } from "./auth-reducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
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
