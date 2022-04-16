// import { v4 as uuid } from "uuid";

// const saveApiDataToContext = (state, value) => {
//   return { ...state, videos: [...value] };
// };

// const changeCategory = (state, value) => {
//   return { ...state, category: value };
// };

// const addToWatchLaterUtil = (state, value) => {
//   return { ...state, watchlater: [...state.watchlater, value] };
// };

// const removeFromWatchLater = (state, value) => {
//   return {
//     ...state,
//     watchlater: state.watchlater.filter((item) => item != value),
//   };
// };

// const addToHistoryUtil = (state, value) => {
//   return {
//     ...state,
//     history: [...state.history.filter((item) => !(item === value)), value],
//   };
// };
// const removeFromHistory = (state, value) => {
//   return {
//     ...state,
//     history: [...state.history.filter((item) => !(item === value))],
//   };
// };
// const likeVideo = (state, value) => {
//   return { ...state, like: [...state.like, value] };
// };

// const unLikeVideo = (state, value) => {
//   return { ...state, like: [...state.like].filter((id) => !(id === value)) };
// };

// const createNewPlaylist = (state, name, desc) => {
//   return {
//     playlists: [
//       ...state.playlists,
//       { name: name, description: desc, videos: [] },
//     ],
//   };
// };

// const addToPlaylist = (state, playlistName, videoId) => {
//   if (
//     state.playlists.reduce((acc, curr) => {
//       if (curr.name === playlistName) {
//         return curr.videos.includes(videoId);
//       }
//       return acc;
//     }, false)
//   ) {
//     return { ...state };
//   } else {
//     return {
//       playlists: [
//         ...state.playlists.map((item) =>
//           item.name === playlistName
//             ? { ...item, videos: [...item.videos, videoId] }
//             : item
//         ),
//       ],
//     };
//   }
// };

// const removeFromPlaylist = (state, id, playlistName) => {
//   return {
//     playlists: state.playlists.map((item) => {
//       if (item.name === playlistName) {
//         return {
//           ...item,
//           videos: item.videos.filter((item) => !(item === id)),
//         };
//       }
//       return item;
//     }),
//   };
// };

// const removePlaylist = (state, playlistName) => {
//   return {
//     playlists: [
//       ...state.playlists.filter((item) => !(item.name === playlistName)),
//     ],
//   };
// };
// const clearHistory = (state) => {
//   return { ...state, history: [] };
// };
// const addNotes = (state, noteTitle, noteContent, videoId) => {
//   if (state.notes[videoId]) {
//     return {
//       ...state,
//       notes: {
//         ...state.notes,
//         [videoId]: [
//           ...state.notes[videoId],
//           { noteId: uuid(), title: noteTitle, content: noteContent },
//         ],
//       },
//     };
//   } else {
//     return {
//       ...state,
//       notes: {
//         ...state.notes,
//         [videoId]: [{ noteId: uuid(), title: noteTitle, content: noteContent }],
//       },
//     };
//   }
// };

// const editNotes = (state, noteTitle, noteContent, videoId, noteId) => {
//   const filteredNotes = state.notes[videoId].filter((item) => {
//     return !(item.noteId === noteId);
//   });

//   const updatedNotes = filteredNotes.concat([
//     { noteId: noteId, title: noteTitle, content: noteContent },
//   ]);
//   return {
//     ...state,
//     notes: { ...state.notes, [videoId]: updatedNotes },
//   };
// };

// const deleteNotes = (state, videoId, noteId) => {
//   const filteredNotes = state.notes[videoId].filter((item) => {
//     return !(item.noteId === noteId);
//   });
//   return {
//     ...state,
//     notes: { ...state.notes, [videoId]: filteredNotes },
//   };
// };

// export {
//   saveApiDataToContext,
//   changeCategory,
//   createNewPlaylist,
//   addToWatchLaterUtil,
//   removeFromWatchLater,
//   addToHistoryUtil,
//   likeVideo,
//   unLikeVideo,
//   addToPlaylist,
//   removePlaylist,
//   removeFromPlaylist,
//   clearHistory,
//   removeFromHistory,
//   addNotes,
//   editNotes,
//   deleteNotes,
// };
