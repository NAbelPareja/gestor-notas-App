
export const BuscadorNotas = ({
  BuscarTitulo,
  handleBuscarTitulo,
  BuscarDetalle,
  handleBuscarDetalle,
  BuscarFecha,
  handleBuscarFecha,
}) => {
  return (
    <div className="buscador">
          <input
            type="text"
            placeholder="Buscar titulo"
            value={BuscarTitulo}
            onChange={handleBuscarTitulo}
          />

          <input
            type="text"
            placeholder="Buscar detalle"
            value={BuscarDetalle}
            onChange={handleBuscarDetalle}
          />
   
          <input 
          type="date"  
          value={BuscarFecha} 
          onChange={handleBuscarFecha} 
          />
    </div>
  );
};
