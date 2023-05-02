import "./reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aluraflix" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
