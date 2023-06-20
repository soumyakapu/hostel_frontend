import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./navbar/Nav";
import Hostel from "./hostel/Hostel";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hostel" element={<Hostel/>}/>
    </Routes>
    </div>
  );
}

export default App;
