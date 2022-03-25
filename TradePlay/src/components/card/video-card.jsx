import { AddToWatchLater } from "./add-to-watchlater";
import { CardLikes } from "./card-likes";

const VideoCard = ({ videoData }) => {
  const { likes } = videoData;
  return (
    <div className="homepage-videos-cards m-y-2 m-x-2">
      <div className="card shadow">
        <div className="card-head">
          <div className="card-image">
            <img
              src="https://picsum.photos/310/250"
              alt="card image"
              className="card-image-img"
            />
          </div>
        </div>
        <div className="card-body width-100">
          <div className="textbox">
            <div className="title">Cart Title</div>
            <div className="subtitle flex-r-w space-between">
              <span>creator</span> <span>category</span>{" "}
            </div>
          </div>
          <CardLikes likes={likes} />
          <div className="btn-vertical">
            <AddToWatchLater videoData={videoData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
