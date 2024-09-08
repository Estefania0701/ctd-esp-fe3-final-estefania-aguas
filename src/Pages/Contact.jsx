import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';
import Form from '../Components/Form';

const Contact = () => {

  const { state, dispatch } = useGlobalContext();
  
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  console.log("tema en contact", state.theme)
  return (
    <div className={`contact ${themeClass}`}>
      <Form/>
    </div>
  )
}

export default Contact
