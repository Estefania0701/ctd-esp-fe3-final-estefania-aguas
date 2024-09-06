import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { routes } from './utils/routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', theme: newTheme });
    localStorage.setItem('theme', newTheme);
  };


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Tu Dentista
        </Typography>
        <Button color="inherit" component={Link} to={routes.home}>Home</Button>
        <Button color="inherit" component={Link} to={routes.favs}>Favoritos</Button>
        <Button color="inherit" component={Link} to={routes.contact}>Contacto</Button>
        <Button color="inherit" onClick={toggleTheme}>
          {state.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>

      </Toolbar>
    </AppBar>

  )
}

export default Navbar