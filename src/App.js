import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./navbar/Nav";
import Hostel from "./hostel/Hostel";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sigin from "./components/signin";
import HostelRegister from "./hostel/hostelRegister";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hostel" element={<Hostel/>}/>
      <Route path="/signin" element={<Sigin/>}/>
      <Route path="/register" element={<HostelRegister/>}/>
    </Routes>
    </div>
  );
}

export default App;
