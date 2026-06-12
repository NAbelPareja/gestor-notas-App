const notasGuardadas = localStorage.getItem("notas");

export const initialState = notasGuardadas
    ? JSON.parse(notasGuardadas)
    : [];
