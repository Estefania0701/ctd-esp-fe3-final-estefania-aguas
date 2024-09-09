import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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
      <Footer/>
    </>
  );
}

export default App;
