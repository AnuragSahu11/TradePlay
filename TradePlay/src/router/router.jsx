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
import { RequiresAuth } from "./requires-auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/videoListing" element={<VideoListingPage />}>
        <Route path="/videoListing/" element={<ExplorePage />} />
        
        <Route element={<RequiresAuth />}>
          <Route path="/videoListing/history" element={<HistoryPage />} />
          <Route path="/videoListing/likesPage" element={<LikedVideoPage />} />
          <Route path="/videoListing/watchLater" element={<WatchLaterPage />} />
          <Route path="/videoListing/:id" element={<SingleVideoPage />} />
          <Route
            path="/videoListing/playlist"
            element={<PlaylistPage />}
          ></Route>
          <Route
            path="/videoListing/playlist/:playlistId"
            element={<ShowPlaylistPage />}
          />
        </Route>

        <Route
          path="/videoListing/search/:searchTerm"
          element={<SearchResultPage />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Router };
