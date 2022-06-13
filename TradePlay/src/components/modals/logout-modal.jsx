import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { REDUCER_ACTION } from "../../utils/constants";
import "./modal.css";

const LogoutModal = ({ showLogout, toggleLogout }) => {
  const navigate = useNavigate();
  const { userDataDispatch } = useAuth();
  const logoutClickHandler = () => {
    localStorage.clear("token");
    userDataDispatch({ type: REDUCER_ACTION.LOGOUT });
    toggleLogout();
    navigate("/");
    toast.success("You have been Logged Out");
  };
  const closeLogoutModalClickHandler = () => {
    toggleLogout();
  };
  return (
    <div
      style={{ display: showLogout ? "block" : "none" }}
      className="logout-modal-wrapper"
    >
      <div className="modal center-x elevated center-y shadow">
        <button
          onClick={closeLogoutModalClickHandler}
          className="card-cross btn-close is-medium"
        >
          <i className="fas fa-times" />
        </button>
        <i className="modal-icon is-red fas fa-sign-out-alt" />
        <div className="textbox">
          <div className="title text-center">Log out</div>
          <div className="text text-center">
            Clicking below will log you out of the current device.
          </div>
        </div>
        <div className="btn-horizontal">
          <button
            onClick={logoutClickHandler}
            className="btn-grey has-red btn-small"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export { LogoutModal };
