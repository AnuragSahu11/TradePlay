import { SmallVideoCard } from "../../card/small-video-card";

const ShowPlaylist = () => {
  return (
    <div className="show-playlist grid-30-70 m-up-6 p-up-6 p-x-3">
      <div className="playlist-name-disc center-x m-r-6 m-dw-4">
        <div className="textbox">
          <div className="title is-5 m-dw-1">Playlist Name</div>
          <div className="subtitle is-3 playlist-disc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            temporibus vitae sunt adipisci ea eius?
          </div>
        </div>
      </div>
      <div className="playlist-videos flex-c-w">
        <SmallVideoCard />
        <SmallVideoCard />
        <SmallVideoCard />
      </div>
    </div>
  );
};

export { ShowPlaylist };
