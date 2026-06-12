import { NotasReducer } from "../reducers/NotasReducer";
import { useReducer } from "react";
import { initialState } from "../data/initialState";

export const useNotas = () => {

    const [listaNotas, dispatch] = useReducer(NotasReducer, initialState);

    const agregarNotas = (nota) => {
    const nuevaNota = {
      id: Date.now(),
      ...nota,
      fecha: new Date().toISOString(),
      favorita: false
    };

    const action = {
      type: "[NOTA] agregar nota",
      payload: nuevaNota,
    };
    dispatch(action);
  };
  const editarNota = (nota) => {
    const action = {
      type: "[NOTA] editar nota",
      payload: nota,
    };
    dispatch(action);
  };
  const eliminarNota = (id) => {
    const action = {
      type: "[NOTA] eliminar nota",
      payload: id,
    };
    dispatch(action);
  };
  const marcarFavorita = (id) => {
    const action = {
      type: "[NOTA] marcar nota favorita",
      payload: id,
    };
    dispatch(action);
  };
  const fijarNota = (id) => {
    const action = {
      type: "[NOTA] fijar nota",
      payload: id,
    };
    dispatch(action);
  };

  return {listaNotas, agregarNotas, editarNota, eliminarNota, marcarFavorita, fijarNota}
}
