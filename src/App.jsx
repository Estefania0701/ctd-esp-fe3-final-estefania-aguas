
import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs";
import Home from "./Pages/Home";
import DentistDetails from "./Pages/DentistDetails";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import { darkTheme, lightTheme } from "./Components/utils/themes";
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {

  const { state } = useContext(ContextGlobal);
  const theme = state.theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Resetea los estilos globales */}
    <Navbar />
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.dentistDetails} element={<DentistDetails />} />
      <Route path={routes.favs} element={<Favs />} />
      <Route path={routes.contact} element={<Contact />} />
    </Routes>
    <Footer />
  </ThemeProvider>
  );
}

export default App;
