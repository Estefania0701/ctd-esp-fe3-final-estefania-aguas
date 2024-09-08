import './Styles/App.css'
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs";
import Home from "./Pages/Home";
import DentistDetails from "./Pages/DentistDetails";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentistDetails} element={<DentistDetails />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
