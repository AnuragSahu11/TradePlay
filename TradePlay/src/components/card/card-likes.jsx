const CardLikes = ({ likes }) => {
  return (
    <div className="textbox flex-r-w space-evenly align-center">
      <div className="like-button flex-r-w space-evenly align-center">
        <p className="text m-r-2 is-3">{likes}</p>
        <i className="bx is-4  bx-like"></i>
      </div>
      <div className="dislike-button flex-r-w space-evenly align-center">
        <p className="text m-r-2 is-3">{likes}</p>
        <i className="bx is-4  bx-dislike"></i>
      </div>
      <i className="is-4 bx bxs-playlist"></i>
    </div>
  );
};

export { CardLikes };
