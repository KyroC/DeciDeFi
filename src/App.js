import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main'


function App() {
  return (
    <div className="App">
      <div className="Navbar">Nav</div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
