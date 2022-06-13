import { useState } from "react";
import { signUpUser } from "../../server-request/server-requests";
import "./login.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useVideos } from "../../context";
import { changeTitle } from "../../utils";

const SignupPage = () => {
  const navigate = useNavigate();
  const { setPageLoading } = useVideos();
  const [viewPassword, setViewPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTC: false,
  });

  const { firstName, lastName, email, password, confirmPassword, acceptTC } =
    formField;

  const validateForm = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (
      firstName &&
      lastName &&
      regex.test(email) &&
      password === confirmPassword &&
      acceptTC
    );
  };

  const createAccClick = async () => {
    if (validateForm()) {
      try {
        await signUpUser(formField, setPageLoading);
        navigate("/login");
      } catch (err) {}
    } else {
      toast.error("Enter correct details");
    }
  };

  changeTitle("Create an account");

  return (
    <section className="signup-section m-up-5 p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">First Name</p>
          <i className="is-lighter fas fa-user"></i>
          <input
            type="text"
            onChange={(e) =>
              setFormField({ ...formField, firstName: e.target.value })
            }
            className="form-input input-focused"
            placeholder="Enter your first name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <i className="is-lighter fas fa-user"></i>
          <input
            type="text"
            onChange={(e) =>
              setFormField({ ...formField, lastName: e.target.value })
            }
            className="form-input input-focused"
            placeholder="Enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <i className="is-lighter fas fa-envelope"></i>
          <input
            type="email"
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
            className="form-input input-focused"
            placeholder="Enter your Email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i
            onClick={() =>
              setViewPassword({
                ...viewPassword,
                password: !viewPassword.password,
              })
            }
            className="view-password is-lighter fas fa-eye"
          />
          <input
            type={viewPassword.password ? "text" : "password"}
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
            className="form-input input-focused"
            placeholder="Enter Password"
            required=""
          />
          <p className="form-label m-up-2">Confirm Password</p>
          <i
            onClick={() =>
              setViewPassword({
                ...viewPassword,
                confirmPassword: !viewPassword.confirmPassword,
              })
            }
            className="view-password is-lighter fas fa-eye"
          />
          <input
            type={viewPassword.confirmPassword ? "text" : "password"}
            onChange={(e) =>
              setFormField({ ...formField, confirmPassword: e.target.value })
            }
            className="form-input input-focused"
            placeholder="Confirm password"
            required=""
          />
        </div>
        <label className="m-up-3 form-checkbox">
          <input
            onChange={() => {
              setFormField({ ...formField, acceptTC: !formField.acceptTC });
            }}
            type="checkbox"
            className=""
          />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button
            onClick={createAccClick}
            className="btn-primary m-dw-1 btn-small"
          >
            Create new Account
          </button>
          <Link to="/login" className="is-2 link">
            Already have an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
