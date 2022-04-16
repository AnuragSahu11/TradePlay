import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { loginUser } from "../../utils/server-requests";
import "./login.css";

const Login = () => {
  const { userDataDispatch } = useAuth();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const demoLoginClick = async () => {
    setLoginCredentials({
      email: "anurag@gmail.com",
      password: "anurag",
    });
    loginUser(
      {
        email: "anurag@gmail.com",
        password: "anurag",
      },
      userDataDispatch
    );
  };

  const loginClick = async () => {
    loginUser(loginCredentials, userDataDispatch);
  };

  return (
    <section className="login-section m-up-5 p-x-1">
      <div className="login br-3 center-x m-up-6 elevated shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Login</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Email</p>
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
            placeholder="enter your email id"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
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
            placeholder="enter your password"
            required=""
          />
        </div>
        <label className="m-up-2 form-checkbox">
          <input type="checkbox" className="" />
          Remember me
        </label>
        <a href="" className="link-secondary m-l-6">
          Forgot password
        </a>
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
          <a onClick={() => navigate("/signup")} className=" link">
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
};

export { Login };
