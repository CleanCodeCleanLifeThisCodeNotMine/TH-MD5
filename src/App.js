import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Regaccountdemo from "./projects/Regaccountdemo/App";
import Regaccountvalidiation from "./projects/Regaccountvalidiation/App";
import ValidateFormLogin from "./projects/ValidateFormLogin/App";
import ValidateFormLoginFormik from "./projects/ValidateFormLoginFormik/App";
import Router1 from "./projects/Router1/App";
import Router2 from "./projects/Router2/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./projects/ContactForm/App";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Regaccountdemo" element={<Regaccountdemo />} />
        <Route path="/Regaccountvalidiation" element={<Regaccountvalidiation />} />
        <Route path="/ValidateFormLogin" element={<ValidateFormLogin />} />
        <Route path="/ValidateFormLoginFormik" element={<ValidateFormLoginFormik />} />
        <Route path="/Router1" element={<Router1 />} />
        <Route path="/Router2/*" element={<Router2 />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/" element={<h2>Chọn một dự án từ menu trên!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
