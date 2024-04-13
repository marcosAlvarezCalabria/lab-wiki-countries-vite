import { Route,Routes } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar/>
     
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/:countryId" element={<CountryDetails/>}></Route>
      </Routes>

    </div>
  );
}


export default App;
