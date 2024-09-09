import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';
import '../Styles/Home.css';
import Card from '../Components/Card';

const Home = () => {

  const { state } = useGlobalContext();
  
  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`home ${themeClass}`}>
      <h1>Conoce nuestros dentistas</h1>
      <div className="card-container">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
        </div>
    </div>
  )
}

export default Home
