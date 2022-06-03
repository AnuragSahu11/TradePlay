import { useAuth } from "../../context";
import { removeFromHistory } from "../../utils/server-requests";

const RemoveFromHistory = ({ id }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token } = userDataState;
  const removeFromHistoryClick = () => {
    removeFromHistory(id, token, userDataDispatch);
  };
  return (
    <i
      onClick={removeFromHistoryClick}
      className="bx is-4 is-primary bx-trash-alt"
    ></i>
  );
};

export { RemoveFromHistory };
