import { useAuth } from "../../context/auth-context";
import { useVideos } from "../../context/videos-context";
import { removeFromHistory } from "../../utils/server-requests";

const RemoveFromHistory = ({ id }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token } = userDataState;
  const removeFromHistoryClickHandler = () => {
    removeFromHistory(id, token, userDataDispatch);
  };
  return (
    <i
      onClick={removeFromHistoryClickHandler}
      className="bx is-4 is-primary bx-trash-alt"
    ></i>
  );
};

export { RemoveFromHistory };
