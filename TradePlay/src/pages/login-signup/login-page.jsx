import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useVideos } from "../../context";
import { loginUser } from "../../server-request/server-requests";
import { demoCredentials } from "../../utils/constants";
import toast from "react-hot-toast";
import "./login.css";
import { changeTitle } from "../../utils";

const LoginPage = () => {
  const { setPageLoading } = useVideos();
  const { userDataDispatch } = useAuth();
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const demoLoginClick = async () => {
    setLoginCredentials(demoCredentials);
    await loginUser(demoCredentials, userDataDispatch, setPageLoading);

    navigate(from, { replace: true });
  };

  const validateForm = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email) && password;
  };

  const loginClick = async () => {
    if (validateForm()) {
      await loginUser(loginCredentials, userDataDispatch, setPageLoading);
      navigate(from, { replace: true });
    } else {
      toast.error("Input Correct Credentials");
    }
  };

  changeTitle("Login to TradePlay");

  return (
    <section className="login-section m-up-6 p-up-6 p-x-1">
      <div className="login br-3 center-x m-up-6 elevated shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Login</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Email</p>
          <i className="is-lighter fas fa-envelope"></i>
          <input
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                email: e.target.value,
              })
            }
            value={loginCredentials.email}
            type="email"
            className="form-input input-focused"
            placeholder="Enter your Email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i className="is-lighter fas fa-key"></i>
          <input
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
            value={loginCredentials.password}
            type="password"
            className="form-input input-focused"
            placeholder="Enter your Password"
            required=""
          />
        </div>
        <label className="m-up-2 form-checkbox">
          <input type="checkbox" className="" />
          Remember me
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button onClick={loginClick} className="btn-primary m-dw-1 btn-small">
            Login
          </button>
          <button
            onClick={demoLoginClick}
            className="btn-primary m-dw-1 btn-small"
          >
            Login using Demo credentials
          </button>
          <Link to={"/signup"} className="is-2 link">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export { LoginPage };
