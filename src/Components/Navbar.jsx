import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { routes } from './utils/routes';
import '../Styles/Navbar.css';
import { useGlobalContext } from './utils/global.context';

const Navbar = () => {

  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', theme: newTheme });
  };

  const themeClass = state.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <nav className={`navbar ${themeClass}`}>
      <div className="navbar-brand">
        <span>TU DENTISTA</span>
        <InsertEmoticonIcon fontSize='large' />
      </div>
      <ul className="navbar-links">
        <li><Link to={routes.home}>Home</Link></li>
        <li><Link to={routes.favs}>Favoritos</Link></li>
        <li><Link to={routes.contact}>Contacto</Link></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {state.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar