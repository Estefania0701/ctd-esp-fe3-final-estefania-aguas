import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';
import '../Styles/Card.css';
import '../Styles/Favs.css';
import Card from '../Components/Card';

const Favs = () => {

  const { state } = useGlobalContext();

  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`favs ${themeClass}`}>
      <h1>
        {state.favs.length === 0 ? 'No has guardado ningún favorito' : 'Tus favoritos'}
      </h1>
      <div className="card-container">
        {state.favs.map((fav) => (
          <Card key={fav.id} dentist={fav} />
        ))}
      </div>
    </div>
  )
}

export default Favs
