import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SmallVideoCard } from "../../components/card/small-video-card";
import { useAuth, useVideos } from "../../context";
import { getPlaylist } from "../../server-request/server-requests";

const ShowPlaylistPage = () => {
  const { setPageLoading } = useVideos();
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const {
    userDataState: { token },
    userDataDispatch,
  } = useAuth();
  if (!playlistId) navigate("/login");
  const [playlistData, setPlaylistData] = useState({});
  const { videos, title, description } = playlistData || false;
  const getPlaylistVideos = async () => {
    await getPlaylist(
      playlistId,
      token,
      setPlaylistData,
      setPageLoading,
      navigate
    );
  };

  useEffect(() => {
    getPlaylistVideos();
  }, []);

  const videoList =
    videos &&
    videos.map((item) => (
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
          <div className="title is-5 m-dw-1">{title}</div>
          <div className="subtitle is-3 regular playlist-disc">
            {description}
          </div>
        </div>
      </div>
      <div className="playlist-videos br-3  p-x-2 p-y-2 flex-c-w">
        {videoList ? videoList : <></>}
      </div>
    </div>
  );
};

export { ShowPlaylistPage };
