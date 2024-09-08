import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';

const Favs = () => {

  const { state } = useGlobalContext();
  
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`favs ${themeClass}`}>
      favoritos
    </div>
  )
}

export default Favs
