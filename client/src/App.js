import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
