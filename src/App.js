import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project1 from "./projects/Project1/App";
import Project2 from "./projects/Project2/App";
import Regaccountdemo from "./projects/Regaccountdemo/App";
import Regaccountvalidiation from "./projects/Regaccountvalidiation/App";
import ValidateFormLogin from "./projects/ValidateFormLogin/App";
import ValidateFormLoginFormik from "./projects/ValidateFormLoginFormik/App";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/Regaccountdemo" element={<Regaccountdemo />} />
        <Route path="/Regaccountdemo" element={<Regaccountdemo />} />
        <Route path="/Regaccountvalidiation" element={<Regaccountvalidiation />} />
        <Route path="/ValidateFormLogin" element={<ValidateFormLogin />} />
        <Route path="/ValidateFormLoginFormik" element={<ValidateFormLoginFormik />} />

        <Route path="/" element={<h2>Chọn một dự án từ menu trên!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
