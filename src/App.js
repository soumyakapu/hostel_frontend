import { Route, Routes } from "react-router-dom";

import Nav from "./navbar/Nav";

import 'bootstrap/dist/css/bootstrap.min.css'
import Sigin from "./components/signin";
import HostelRegister from "./hostel/hostelRegister";
import HostelOwnerHome from "./hostelOwnerView/HostelOwnerHome";
import Home from "./components/Home";
import Hostel from "./components/Hostel";
import EditHostel from "./hostel/EditHostel";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hostel" element={<Hostel/>}/>
      <Route path="/signin" element={<Sigin/>}/>
      <Route path="/register" element={<HostelRegister/>}/>
      <Route path="/:user" element={<HostelOwnerHome/>}/>
      <Route path="/edit" element={<EditHostel/>}/>
    </Routes>
    </div>
  );
}

export default App;
