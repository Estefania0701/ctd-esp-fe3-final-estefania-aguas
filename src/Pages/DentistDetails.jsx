import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';

const DentistDetails = () => {

  const { state } = useGlobalContext();
  
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`dentist-details ${themeClass}`}>
      Detalles del dentista
    </div>
  )
}

export default DentistDetails
