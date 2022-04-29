import { useState } from "react";
import { useVideos } from "../../context/videos-context";
import { AddNote, EditNote } from "./note-cards";

const NoteCard = ({ currentVideoId }) => {
  const { videoState } = useVideos();
  return (
    <>
      <AddNote currentVideoId={currentVideoId} />
      {videoState.notes[currentVideoId] &&
        videoState.notes[currentVideoId].map((item) => (
          <NoteListComponent
            currentVideoId={currentVideoId}
            currentNoteData={item}
          />
        ))}
    </>
  );
};

const NoteListComponent = ({ currentNoteData, currentVideoId }) => {
  const { videoDispatch } = useVideos();
  const [showEditNotes, setEditNotes] = useState(false);
  const toggleShowEditNotes = () => {
    setEditNotes((prevState) => !prevState);
  };
  const { title } = currentNoteData;
  const deleteNoteClick = () => {
    videoDispatch({
      type: "DELETE_NOTE",
      value: { currentVideoId, noteId: currentNoteData.noteId },
    });
  };
  return (
    <>
      {!showEditNotes && (
        <div
          onClick={toggleShowEditNotes}
          className="m-y-2 p-y-1 p-x-1 center-x small-note-comp br-3"
        >
          <i className="bx is-4 bx-edit-alt m-r-1"></i>{" "}
          <span className="is-3">{title}</span>{" "}
          <i
            onClick={deleteNoteClick}
            className="bx is-4 bx-trash-alt m-l-1"
          ></i>
        </div>
      )}
      {showEditNotes && (
        <EditNote
          currentNoteData={currentNoteData}
          toggleShowEditNotes={toggleShowEditNotes}
          currentVideoId={currentVideoId}
        />
      )}
    </>
  );
};

export { NoteCard };
