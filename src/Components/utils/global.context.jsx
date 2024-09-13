import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { reducer } from "./reducer";

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(apiUrl).then((response) => {
      dispatch({ type: 'GET_DENTISTS', dentists: response.data });
    });

    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  // Memorizar el valor del contexto para evitar recrearlo en cada renderizado
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);


  return (
    <ContextGlobal.Provider value={ contextValue }>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);
