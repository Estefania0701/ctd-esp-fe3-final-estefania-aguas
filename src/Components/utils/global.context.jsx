import { createContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.theme };
    case "ADD_DATA":
      return { ...state, data: [...state.data, action.data] };
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
}

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: []
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
