import { useState } from "react";
import { usePlaylist } from "../../context/playlist-context";
import { SinglePlaylistComponent } from "../video-listing/pages/playlists";

const AddToPlaylistModal = ({ isModalOpen, switchModal, videoId }) => {
  const { playlistState, playlistDispatch } = usePlaylist();

  const outsideModalClickHandler = () => {
    switchModal((prevState) => !prevState);
  };
  const insideModalClickHandler = (e) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    switchModal((prevState) => !prevState);
  };

  return (
    <div className="add-to-playlist add-to-playlist-modal text-center">
      <button onClick={closeModal} className="card-cross btn-close is-medium">
        <i className="fas fa-times" />
      </button>
      {playlistState.playlists.map((item) => (
        <SinglePlaylistComponent
          action={"add"}
          videoId={videoId}
          name={item.name}
        />
      ))}
    </div>
  );
};

export { AddToPlaylistModal };
