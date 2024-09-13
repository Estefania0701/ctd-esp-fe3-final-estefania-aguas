import React from "react";
import { useGlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Styles/Card.css';

const Card = ({ dentist }) => {

  const { state, dispatch } = useGlobalContext();

  const isFav = state.favs.find((fav) => fav.id === dentist.id);

  const editFav = () => {
    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', fav: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', fav: dentist });
    }
  }

  return (
    <div className="card">
      <PersonIcon fontSize='large' />
      <h3 className="card-title">
        <Link to={`/dentist/${dentist.id}`}>
          {dentist.name}
        </Link>
      </h3>
      <p>{dentist.username}</p>
      <button onClick={editFav} className="fav-button">
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </div>
  );
};

export default Card;
