import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { About, Vans, Home } from "./components/pages";
import Simple from './components/pages/Simple';
import Luxury from './components/pages/Luxury';
import Rugged from './components/pages/Rugged';
import { Van1 } from "./components/pages/Van1";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/rugged" element={<Rugged />} />
        <Route path="/van1" element={<Van1 />} />
      </Routes>
    </div>
  );
}

export default App;
 