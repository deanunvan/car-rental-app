import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { About, Vans, Home } from "./components/pages";
import Simple from './components/pages/Simple';
import Luxury from './components/pages/Luxury';
import Rugged from './components/pages/Rugged';
import { Van1 } from "./components/pages/Van1";
import { Van2 } from "./components/pages/Van2";
import { Van3 } from "./components/pages/Van3";
import { Van4 } from "./components/pages/Van4";
import { Van5 } from "./components/pages/Van5";
import { Van6 } from "./components/pages/Van6";


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
        <Route path="/van2" element={<Van2 />} />
        <Route path="/van3" element={<Van3 />} />
        <Route path="/van4" element={<Van4 />} />
        <Route path="/van5" element={<Van5 />} />
        <Route path="/van6" element={<Van6 />} />
      </Routes>
    </div>
  );
}

export default App;
 