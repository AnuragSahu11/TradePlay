import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="login-section m-up-5 p-x-1">
      <div className="login br-3 center-x m-up-6 elevated shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Login</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Email</p>
          <input
            type="email"
            className="form-input input-focused"
            placeholder="enter your email id"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <input
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
          <button className="btn-primary m-dw-1 btn-small">Login</button>
          <a onClick={() => navigate("/signup")} className=" link">
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
};

export { Login };
