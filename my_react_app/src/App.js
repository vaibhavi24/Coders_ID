import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import ShowCompany from './components/company';
import ViewCompanies from './components/usercompaniesview';
import AddReview from "./components/AddReview";
// import "../src/style.css";
function App() {
  return (
   <div className="Main">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/companies' element={<ShowCompany />} />
        <Route path='/viewcompanies' element={<ViewCompanies />} />
        <Route path='/dummy/:companyName' element={<AddReview />} />
      </Routes>
    </BrowserRouter>
    </div>
        
  );
}

export default App;
