export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        localStorage.setItem('theme', action.theme);
        return { ...state, theme: action.theme };
      case "GET_DENTISTS":
        return { ...state, dentists: action.dentists };
      case "ADD_FAV":
        localStorage.setItem('favs', JSON.stringify([...state.favs, action.fav]));
        return { ...state, favs: [...state.favs, action.fav] };
      case "REMOVE_FAV":
        const fileredFavs = state.favs.filter((fav) => fav.id !== action.fav.id);
        localStorage.setItem('favs', JSON.stringify(fileredFavs));
        return { ...state, favs: fileredFavs };
      default:
        throw new Error(`Acción no soportada: ${action.type}`);
    }
  }