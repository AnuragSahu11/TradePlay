import { removeFromHistory } from "../../context/context-utils";
import { useVideos } from "../../context/videos-context";

const RemoveFromHistory = ({ id }) => {
  const { videoDispatch } = useVideos();
  const removeFromHistoryClickHandler = () => {
    videoDispatch({ type: "REMOVE_FROM_HISTORY", value: id });
  };
  return (
    <i
      onClick={removeFromHistoryClickHandler}
      className="bx is-4 is-primary bx-trash-alt"
    ></i>
  );
};

export { RemoveFromHistory };
