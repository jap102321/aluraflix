import "./reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewContent from "./pages/NewContent";
import { createGlobalStyle } from "styled-components";
import EditCategory from "./components/AddContent/EditCategory";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  font-family: "Source Sans Pro", sans-serif;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/aluraflix" element={<Home />} />
          <Route path="/new/video" element={<NewContent />} />
          <Route path="/new/category" element={<NewContent />} />
          <Route path="/edit/category/:id" element={<EditCategory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
