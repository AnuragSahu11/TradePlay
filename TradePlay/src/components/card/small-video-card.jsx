const SmallVideoCard = () => {
  return (
    <div className="notification-list">
      <ul className="list child-m-s">
        <li className="list-items list-none">
          <a href="" className="notification-list-link">
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
                  <div className="title semibold">Cart Title</div>
                  <div className="subtitle">Subtitle</div>
                </div>
                <div className="textbox">
                  <p className="text">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="list-items list-none">
          <a href="" className="notification-list-link">
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
                  <div className="title semibold">Cart Title</div>
                  <div className="subtitle">Subtitle</div>
                </div>
                <div className="textbox">
                  <p className="text">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { SmallVideoCard };
