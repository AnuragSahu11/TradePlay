import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";
import { Loader } from "./components/loader/loader";
import { toastStyle } from "./utils/constants";
import "./App.css";
import { Router } from "./router/router";

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
