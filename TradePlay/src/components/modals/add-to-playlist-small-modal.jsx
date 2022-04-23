const AddToPlaylistSmallModal = ({ videoId, switchModal }) => {
  const addToPlaylistClickHandler = ({ name }) => {
    switchModal();
  };
  const playlists = playlists.map((item) => (
    <div
      onClick={() => addToPlaylistClickHandler(item)}
      className="add-to-playlist-small is-3"
    >
      {item.name}
    </div>
  ));
  return (
    <div className="single-video-playlist-list p-y-1 p-x-3">{playlists}</div>
  );
};

export { AddToPlaylistSmallModal };
