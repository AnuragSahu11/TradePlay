import "./login.css";

const SignupPage = () => {
  return (
    <section className="signup-section m-up-5 p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Name</p>
          <i className="fas fa-user"></i>
          <input
            type="text"
            className="form-input input-focused"
            placeholder="Enter your first name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <i className="fas fa-user"></i>
          <input
            type="text"
            className="form-input input-focused"
            placeholder="Enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            className="form-input input-focused"
            placeholder="Enter your Email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i className="view-password fas fa-eye" />
          <input
            type="password"
            className="form-input input-focused"
            placeholder="Enter Password"
            required=""
          />
          <p className="form-label m-up-2">Confirm Password</p>
          <i className="view-password fas fa-eye" />
          <input
            type="password"
            className="form-input input-focused"
            placeholder="Confirm password"
            required=""
          />
        </div>
        <label className="m-up-3 form-checkbox">
          <input type="checkbox" className="" />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button className="btn-primary m-dw-1 btn-small">
            Create new Account
          </button>
          <a href="" className="is-2 link">
            Already have an account
          </a>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
