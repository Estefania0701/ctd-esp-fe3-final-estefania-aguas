import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/Contact.css';
import Form from '../Components/Form';

const Contact = () => {

  const { state } = useGlobalContext();

  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`contact ${themeClass}`}>
      <h1>Te contactamos</h1>
      <Form />
    </div>
  )
}

export default Contact
