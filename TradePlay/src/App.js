import {
  Homepage,
  Footer,
  Navbar,
  VideoListing,
  Signup,
  Login,
} from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Explore,
  WatchLater,
  History,
  LikesPage,
  PlaylistPage,
  ShowPlaylist,
  Videopage,
  SingleVideoPage,
  SearchResult,
} from "./components/video-listing/pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videoListing" element={<VideoListing />}>
          <Route path="/videoListing/" element={<Explore />} />
          <Route path="/videoListing/history" element={<History />} />
          <Route path="/videoListing/likesPage" element={<LikesPage />} />
          <Route path="/videoListing/watchLater" element={<WatchLater />} />
          <Route path="/videoListing/:id" element={<SingleVideoPage />} />
          <Route
            path="/videoListing/playlist"
            element={<PlaylistPage />}
          ></Route>
          <Route
            path="/videoListing/playlist/:playlistId"
            element={<ShowPlaylist />}
          />
          <Route path="/videoListing/videopage" element={<Videopage />} />
          <Route
            path="/videoListing/search/:searchTerm"
            element={<SearchResult />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
