import { Footer, Navbar } from "./components";
import {
  HomePage,
  VideoListingPage,
  SignupPage,
  LoginPage,
  HistoryPage,
  ExplorePage,
  PlaylistPage,
  LikedVideoPage,
  WatchLaterPage,
  SingleVideoPage,
  SearchResultPage,
  ShowPlaylistPage,
  ErrorPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./utils/requires-auth";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.6rem",
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/videoListing" element={<VideoListingPage />}>
          <Route path="/videoListing/" element={<ExplorePage />} />
          <Route
            path="/videoListing/history"
            element={
              <RequiresAuth>
                <HistoryPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/likesPage"
            element={
              <RequiresAuth>
                <LikedVideoPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/watchLater"
            element={
              <RequiresAuth>
                <WatchLaterPage />
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
                <ShowPlaylistPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/videoListing/search/:searchTerm"
            element={<SearchResultPage />}
          />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
