import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SmallVideoCard } from "../../components/card/small-video-card";
import { useAuth } from "../../context";
import { getPlaylist } from "../../server-request/server-requests";


const ShowPlaylistPage = () => {
  const { playlistId } = useParams();
  const { userDataState, userDataDispatch } = useAuth();
  const { token } = userDataState;
  const [playlistData, setPlaylistData] = useState({});

  const getPlaylistVideos = async () => {
    await getPlaylist(playlistId, token, setPlaylistData);
  };

  useEffect(() => {
    getPlaylistVideos();
  }, []);

  const videoList =
    playlistData.videos &&
    playlistData.videos.map((item) => (
      <SmallVideoCard
        remove={"playlist"}
        playlistId={playlistId}
        videoData={item}
        setPlaylistData={setPlaylistData}
      />
    ));

  return (
    <div className="show-playlist grid-30-70 m-up-6 p-x-3">
      <div className="playlist-name-disc center-x m-r-6 m-dw-4">
        <div className="textbox">
          <div className="title is-5 m-dw-1">title</div>
          <div className="subtitle is-3 regular playlist-disc">desc</div>
        </div>
      </div>
      <div className="playlist-videos br-3  p-x-2 p-y-2 flex-c-w">
        {videoList ? videoList : <></>}
      </div>
    </div>
  );
};

export { ShowPlaylistPage };
