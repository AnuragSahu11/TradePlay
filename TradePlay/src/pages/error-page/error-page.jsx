import { changeTitle } from "../../utils";
import "./error-page.css";

const ErrorPage = () => {
  changeTitle("Error page");
  return (
    <div className="center-x center-y">
      <img
        className="error-image"
        src="./images/404Error.svg"
        alt="error 404"
      />
    </div>
  );
};

export { ErrorPage };
