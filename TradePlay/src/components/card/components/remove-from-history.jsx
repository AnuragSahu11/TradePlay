import { useAuth } from "../../../context";
import { removeFromHistory } from "../../../server-request/server-requests";

const RemoveFromHistory = ({ id }) => {
  const {
    userDataState: { token },
    userDataDispatch,
  } = useAuth();
  const removeFromHistoryClick = () => {
    removeFromHistory(id, token, userDataDispatch);
  };
  return (
    <i
      onClick={removeFromHistoryClick}
      className="bx is-4 is-primary bx-trash-alt pointer"
    ></i>
  );
};

export { RemoveFromHistory };
