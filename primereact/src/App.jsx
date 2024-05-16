import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//* Theme
import "primereact/resources/themes/lara-light-blue/theme.css";
//* Core
import "primereact/resources/primereact.min.css";
import Navigation from "./components/Navigation";
//*Icons
import "primeicons/primeicons.css";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
