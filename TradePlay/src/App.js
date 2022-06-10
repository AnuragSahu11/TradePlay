import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";
import { Loader } from "./components/loader/loader";
import { toastStyle } from "./utils/constants";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader size={"large"} />
      <Toaster toastOptions={toastStyle} />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
