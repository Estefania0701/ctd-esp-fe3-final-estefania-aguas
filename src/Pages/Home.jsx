import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';

const Home = () => {

  const { state } = useGlobalContext();
  
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`home ${themeClass}`}>
        Home
    </div>
  )
}

export default Home
