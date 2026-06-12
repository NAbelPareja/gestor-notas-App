

export const NotasReducer = (state, action) => {
    switch (action.type) {
      case "[NOTA] agregar nota":
        return [...state, action.payload];
      case "[NOTA] editar nota":
        return state.map((nota) => {
          if (nota.id == action.payload.id) {
            return {
              ...nota,
              titulo: action.payload.titulo,
              detalle: action.payload.detalle,
            };
          }
          return nota;
        });

      case "[NOTA] eliminar nota":
        return state.filter((nota) => nota.id !== action.payload);
      case "[NOTA] marcar nota favorita":
        return state.map((nota) => {
          if (nota.id == action.payload) {
            return { ...nota, favorita: !nota.favorita };
          }
          return nota;
        });
      case "[NOTA] fijar nota":
        return;
      default:
        return state;
    }
}
