import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.theme };
    case "GET_DENTISTS":
      return { ...state, dentists: action.dentists };
    case "ADD_FAV":
      localStorage.setItem('favs', JSON.stringify([...state.favs, action.fav]));
      return { ...state, favs: [...state.favs, action.fav] };
    case "REMOVE_FAV":
        localStorage.setItem('favs', JSON.stringify(state.favs.filter((fav) => fav.id !== action.fav.id)));
        return { ...state, favs: state.favs.filter((fav) => fav.id !== action.fav.id) };
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
}

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  dentists: [],
  favs: [],
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(apiUrl).then((response) => {
      console.log(response.data);
      dispatch({ type: 'GET_DENTISTS', dentists: response.data });
    });

    localStorage.setItem('theme', state.theme);
  }, [state.theme]);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);
