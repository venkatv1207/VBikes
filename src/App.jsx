import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/Nav";
import Scooters from "./Components/Scooters/Scooters";
import Bikes from "./Components/Bikes/Bikes";
import SuperBikes from "./Components/SuperBikes/SuperBikes";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="scooters" element={<Scooters />}></Route>
        <Route path="bikes" element={<Bikes />}></Route>
        <Route path="superbikes" element={<SuperBikes />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
