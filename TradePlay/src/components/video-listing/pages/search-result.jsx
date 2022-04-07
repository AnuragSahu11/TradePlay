import { useParams } from "react-router-dom";
import { useVideos } from "../../../context/videos-context";
import { VideoCard } from "../../card/video-card";
import { changeTitle } from "../../../utils";
import { useEffect } from "react";

const SearchResult = () => {
  const { searchTerm } = useParams();
  const { videoState } = useVideos();
  const searchedVideos = videoState.videos
    .filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item) => <VideoCard videoData={item} />);
  useEffect(() => changeTitle(`Search results for "${searchTerm}"`));
  return (
    <>
      <div className="title text-center m-dw-2">{`Search results for "${searchTerm}" - ${searchedVideos.length} results`}</div>
      <div className="flex-r-w space-evenly">{searchedVideos}</div>
    </>
  );
};

export { SearchResult };
