const Playlist = () => {
  const clickHandler = () => {
    console.log("hello");
  };

  return (
    <div className="flex-c-w m-up-6 center-x ">
      <div
        onClick={clickHandler}
        className="addToPlaylist p-x-2 br-3 create-playlist flex-row align-center is-4"
      >
        <i className="bx is-primary bx-plus is-5 m-r-1"></i>
        <p className="m-y-1 semibold">Create new Playlist</p>
      </div>
      <div className="addToPlaylist m-up-4 text-center p-x-2 br-3 create-playlist flex-row align-center is-4">
        <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
        <p className="m-y-1 regular text-center">English Songs</p>
      </div>
    </div>
  );
};
export { Playlist };
