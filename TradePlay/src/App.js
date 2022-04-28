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
import Mockman from "mockman-js";
import { RequiresAuth } from "./utils/requires-auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/videoListing" element={<VideoListing />}>
          <Route path="/videoListing/" element={<Explore />} />
          <Route
            path="/videoListing/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/likesPage"
            element={
              <RequiresAuth>
                <LikesPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/watchLater"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/:id"
            element={
              <RequiresAuth>
                <SingleVideoPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/playlist"
            element={
              <RequiresAuth>
                <PlaylistPage />
              </RequiresAuth>
            }
          ></Route>
          <Route
            path="/videoListing/playlist/:playlistId"
            element={
              <RequiresAuth>
                <ShowPlaylist />
              </RequiresAuth>
            }
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
