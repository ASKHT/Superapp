import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Info from "../src/components/Info/index";
import Showcase from "./pages/Showcase/Showcase";
// import Movies from "./pages/Movies";
import Entertainment from "./pages/Entertainment";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/info" element={<Info />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/movies" element={<Entertainment />} />
      <Route path="*" element={<h1>404 Route not found 😞</h1>} />
    </Routes>
  );
}

export default App;

// /register -> Register
// /movies -> Movies
// /info -> Info
// /showcase -> Showcase
