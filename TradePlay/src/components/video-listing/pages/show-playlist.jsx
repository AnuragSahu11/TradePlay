import { useParams } from "react-router-dom";
import { usePlaylist } from "../../../context/playlist-context";
import { useVideos } from "../../../context/videos-context";
import { SmallVideoCard } from "../../card/small-video-card";

const ShowPlaylist = () => {
  const { playlistId } = useParams();
  const { videoState } = useVideos();
  const { videos } = videoState;
  const { playlistState, playlistDispatch } = usePlaylist();
  const playlistData = playlistState.playlists.find(
    ({ name }) => name === playlistId
  );
  const playlistVideoData = videos.filter(({ _id }) =>
    playlistData.videos.includes(_id)
  );
  const finalVideoList = playlistVideoData.map((item) => (
    <SmallVideoCard
      remove={"playlist"}
      playlistName={playlistData.name}
      videoData={item}
    />
  ));
  return (
    <div className="show-playlist grid-30-70 m-up-6 p-x-3">
      <div className="playlist-name-disc center-x m-r-6 m-dw-4">
        <div className="textbox">
          <div className="title is-5 m-dw-1">{playlistData.name}</div>
          <div className="subtitle is-3 regular playlist-disc">
            {playlistData.description}
          </div>
        </div>
      </div>
      <div className="playlist-videos br-3  p-x-2 p-y-2 flex-c-w">
        {finalVideoList}
      </div>
    </div>
  );
};

export { ShowPlaylist };
