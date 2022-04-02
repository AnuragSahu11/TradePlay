import { RemoveFromPlaylist } from "./add-to-playlist";

const SmallVideoCard = ({ videoData, playlistName }) => {
  const { _id, title } = videoData;
  return (
    <div className="notification-list  p-r-2">
      <ul className="list child-m-s m-x-0">
        <li className="list-items list-none">
          <div className="notification-list-link">
            <div className="card has-accent border-none card-horizontal">
              <div className="card-head">
                <div className="card-image">
                  <img
                    src={`https://img.youtube.com/vi/${_id}/0.jpg`}
                    alt="card image"
                    srcSet=""
                    className="card-image-img"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="small-video-card-title regular">{title}</div>
                  <div className="subtitle">Subtitle</div>
                </div>
                <div className="textbox">
                  <p className="text">Lorem ipsum</p>
                </div>
                <RemoveFromPlaylist playlistName={playlistName} id={_id} />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { SmallVideoCard };
