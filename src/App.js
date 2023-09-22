import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dex from './components/dex'
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <div className="Navbar">Nav</div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
