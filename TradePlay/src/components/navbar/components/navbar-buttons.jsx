import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

const NavbarButtons = ({ toggleLogout }) => {
  const navigate = useNavigate();
  const {
    userDataState: { token },
  } = useAuth();
  return token ? (
    <button onClick={toggleLogout} className="btn-primary nav-btn btn-small">
      Log Out
    </button>
  ) : (
    <>
      <button
        onClick={() => navigate("/login")}
        className="btn-primary nav-btn btn-small"
      >
        Log in
      </button>
      <button
        onClick={() => navigate("/signup")}
        className="btn-primary nav-btn btn-small m-x-1"
      >
        Sign Up
      </button>
    </>
  );
};

export { NavbarButtons };
