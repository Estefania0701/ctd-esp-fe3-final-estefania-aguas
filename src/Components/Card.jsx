import React from "react";
import { useGlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const Card = ({dentist}) => {

  const {dispatch} = useGlobalContext();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAV', fav: dentist});
    localStorage.setItem('fav', JSON.stringify(dentist));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <PersonIcon />
        <h3>{dentist.name} - {dentist.username}</h3>
        <p>{dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${dentist.id}`}>
          <button>Ver detalles</button>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
