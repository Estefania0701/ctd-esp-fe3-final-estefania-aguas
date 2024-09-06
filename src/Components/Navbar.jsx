import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate();

  const { state, dispatch } = useContext(ContextGlobal);


  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', theme: newTheme });
    localStorage.setItem('theme', newTheme);
  };


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => navigate(-1)}>Regresar</button>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/favs')}>Favoritos</button>
      <button onClick={() => navigate('/contact')}>Contacto</button>
      <button onClick={toggleTheme}>
        {state.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </nav>
  )
}

export default Navbar