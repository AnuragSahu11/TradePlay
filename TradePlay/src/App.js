import { Homepage, Footer, Navbar } from "./components/components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { getApiData } from "./utils/get-api-data";
import { useVideos } from "./context/videos-context";
import { VideoListing } from "./components/video-listing/video-listing";
import {
  Explore,
  WatchLater,
  History,
  LikesPage,
  Playlist,
} from "./components/video-listing/pages/video-listing-pages";
function App() {
  const { videoDispatch } = useVideos();
  useEffect(() => {
    getApiData(videoDispatch);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videoListing" element={<VideoListing />}>
          <Route path="/videoListing/" element={<Explore />} />
          <Route path="/videoListing/history" element={<History />} />
          <Route path="/videoListing/likePage" element={<LikesPage />} />
          <Route path="/videoListing/watchLater" element={<WatchLater />} />
          <Route path="/videoListing/playlist" element={<Playlist />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
