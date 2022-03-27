import { useState } from "react";
import { AddNewPlaylistModal } from "../../../utils/add-new-playlist-modal";

const Playlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createNewPlaylistclickHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="playlist-page width-100">
      {isModalOpen && (
        <AddNewPlaylistModal
          isModalOpen={isModalOpen}
          switchModal={setIsModalOpen}
        />
      )}
      <div className="flex-c-w m-up-6 playlist-body ">
        <div
          onClick={createNewPlaylistclickHandler}
          className="addToPlaylist pointer p-x-2 br-3 center-x create-playlist flex-row align-center is-4"
        >
          <i className="bx is-primary bx-plus is-5 m-r-1"></i>
          <p className="m-y-1 semibold">Create new Playlist</p>
        </div>

        <div className="addToPlaylist m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4">
          <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
          <p className="m-y-1 regular text-center"></p>
        </div>
      </div>
    </div>
  );
};
export { Playlist };
