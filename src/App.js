import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
