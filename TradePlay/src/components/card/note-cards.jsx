import { useState } from "react";
import { useVideos } from "../../context/videos-context";

const AddNote = ({ currentVideoId }) => {
  const [showAddNotes, setShowNotes] = useState(false);
  const toggleShowAddNotes = () => {
    setShowNotes((prevState) => !prevState);
  };
  const { videoState, videoDispatch } = useVideos();
  const [noteData, setNoteData] = useState({ title: "", content: "" });
  const saveClickHandler = () => {
    videoDispatch({ type: "ADD_NOTE", value: { currentVideoId, noteData } });
    toggleShowAddNotes();
  };
  return (
    <>
      {!showAddNotes && (
        <div className="add-note-wrapper m-up-6 text-center width-100">
          <div
            onClick={toggleShowAddNotes}
            className="has-accent pointer br-3 is-3 p-r-1 add-note-div flex-row justify-center align-center center-text"
          >
            <i className="bx is-5 is-primary bx-plus"></i>
            <p className="semibold">Add Note</p>
          </div>
        </div>
      )}
      {showAddNotes && (
        <div className="custom-form">
          <div className="form notes-width center-x m-up-6 has-accent br-3">
            <div className="form-div custom-form-form-div">
              <i
                onClick={toggleShowAddNotes}
                className="form-close pointer fas fa-times"
              ></i>
              <p className="form-label is-3 semibold">Notes</p>
              <i className="fa-solid fa-note-sticky"></i>
              <input
                type="text"
                onChange={(e) =>
                  setNoteData({ ...noteData, title: e.target.value })
                }
                className="form-input input-focused"
                placeholder="Title"
                required
              />
            </div>
            <div className="form-div">
              <textarea
                name=""
                onChange={(e) =>
                  setNoteData({ ...noteData, content: e.target.value })
                }
                className="form-textarea"
                placeholder="Description"
                id=""
              ></textarea>
            </div>
            <button
              onClick={saveClickHandler}
              className="center-x btn-secondary btn-small"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const EditNote = ({ currentVideoId, currentNoteData, toggleShowEditNotes }) => {
  const { videoState, videoDispatch } = useVideos();
  const { noteId } = currentNoteData;
  const [noteData, setNoteData] = useState({
    title: currentNoteData.title,
    content: currentNoteData.content,
  });
  const saveClickHandler = () => {
    videoDispatch({
      type: "EDIT_NOTE",
      value: { noteId, currentVideoId, noteData },
    });
    toggleShowEditNotes();
  };
  return (
    <>
      <div className="custom-form">
        <div className="form notes-width center-x m-up-6 has-accent br-3">
          <div className="form-div custom-form-form-div">
            <i
              onClick={toggleShowEditNotes}
              className="form-close pointer fas fa-times"
            ></i>
            <p className="form-label is-3 semibold">Notes</p>
            <i className="fa-solid fa-note-sticky"></i>
            <input
              type="text"
              value={noteData.title}
              onChange={(e) =>
                setNoteData({ ...noteData, title: e.target.value })
              }
              className="form-input input-focused"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-div">
            <textarea
              name=""
              value={noteData.content}
              onChange={(e) =>
                setNoteData({ ...noteData, content: e.target.value })
              }
              className="form-textarea"
              placeholder="Description"
              id=""
            ></textarea>
          </div>
          <button
            onClick={saveClickHandler}
            className="center-x btn-secondary btn-small"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export { AddNote, EditNote };
