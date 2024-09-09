import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { routes } from "./Components/utils/routes";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import NotFound from './Routes/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.base} element={<Home />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
