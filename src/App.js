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
import BookManager from "./projects/BookManager/App";
import EmailFormwithUpload from "./projects/EmailFormwithUpload/App";
import ReduxSagaExample from "./projects/ReduxSagaExample/App";
import ReduxToDoList from "./projects/ReduxToDoList/App";
import ReduxCart from "./projects/ReduxCart";
import ReduxGetDeleteUser from "./projects/ReduxGetDeleteUser";
import ReduxGetPostUpdate from "./projects/ReduxGetPostUpdate";
import BookLibrary from "./projects/books/App";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Regaccountdemo" element={<Regaccountdemo />} />
          <Route path="/Regaccountvalidiation" element={<Regaccountvalidiation />} />
          <Route path="/ValidateFormLogin" element={<ValidateFormLogin />} />
          <Route path="/ValidateFormLoginFormik" element={<ValidateFormLoginFormik />} />
          <Route path="/Router1" element={<Router1 />} />
          <Route path="/Router2/*" element={<Router2 />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/BookManager" element={<BookManager />} />
          <Route path="/EmailFormwithUpload" element={<EmailFormwithUpload />} />
          <Route path="/ReduxSagaExample/*" element={<ReduxSagaExample />} />
          <Route path="/ReduxToDoList" element={<ReduxToDoList />} />
          <Route path="/ReduxCart" element={<ReduxCart />} />
          <Route path="/ReduxGetDeleteUser" element={<ReduxGetDeleteUser />} />
          <Route path="/ReduxGetPostUpdate/*" element={<ReduxGetPostUpdate />} />
          <Route path="/books/*" element={<BookLibrary />} />
          <Route path="/" element={<h2>Chọn một dự án từ menu trên!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
