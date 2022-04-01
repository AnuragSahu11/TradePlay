import { RemoveFromPlaylist } from "./add-to-playlist";

const SmallVideoCard = ({ videoData, playlistName }) => {
  const { _id, title } = videoData;
  return (
    <div className="notification-list">
      <ul className="list child-m-s">
        <li className="list-items list-none">
          <div className="notification-list-link">
            <div className="card card-horizontal">
              <div className="card-head">
                <div className="card-image">
                  <img
                    src="https://picsum.photos/120/255"
                    alt="card image"
                    srcSet=""
                    className="card-image-img"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title semibold">{title}</div>
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
