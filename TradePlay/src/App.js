import { Homepage, Footer, Navbar } from "./components/components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { getApiData } from "./utils/get-api-data";
import { useVideos } from "./context/videos-context";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
