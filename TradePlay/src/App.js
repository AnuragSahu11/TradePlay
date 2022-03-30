import {
  Homepage,
  Footer,
  Navbar,
  VideoListing,
} from "./components/components";
import { Route, Routes } from "react-router-dom";
import {
  Explore,
  WatchLater,
  History,
  LikesPage,
  Playlist,
  ShowPlaylist,
  Videopage,
} from "./components/video-listing/pages/video-listing-pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlists" element={<ShowPlaylist />} />
        <Route path="/videoListing" element={<VideoListing />}>
          <Route path="/videoListing/" element={<Explore />} />
          <Route path="/videoListing/history" element={<History />} />
          <Route path="/videoListing/likesPage" element={<LikesPage />} />
          <Route path="/videoListing/watchLater" element={<WatchLater />} />
          <Route path="/videoListing/playlist" element={<Playlist />} />
          <Route path="/videoListing/videopage" element={<Videopage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
