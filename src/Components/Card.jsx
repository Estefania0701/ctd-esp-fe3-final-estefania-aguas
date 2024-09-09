import React from "react";
import { useGlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Styles/Card.css';

const Card = ({dentist}) => {

  const {state, dispatch} = useGlobalContext();

  const isFav = state.favs.find((fav) => fav.id === dentist.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFav) {
      dispatch({type: 'REMOVE_FAV', fav: dentist});
    } else {
        dispatch({type: 'ADD_FAV', fav: dentist});
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <PersonIcon  fontSize='large'/>
        <h3 className="card-title">
          <Link to={`/dentist/${dentist.id}`}>
              {dentist.name}
          </Link>
        </h3>
        
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
    </div>
  );
};

export default Card;
