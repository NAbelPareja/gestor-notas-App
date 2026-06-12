import { Checkbox, Button } from "@mui/material"
export const TablaNotas = ({listaFiltrada, marcarFavorita, handleEditarNota, eliminarNota}) => {
  return (
    <div className = "tab">
      <table className = "table">
          <thead>
            
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Detalle</th>
              <th scope="col">Favorita</th>
              <th scope="col">Fecha</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listaFiltrada.map((valor) => (
              <tr key={valor.id}>
                <td>{valor.titulo}</td>
                <td>{valor.detalle}</td>
                <td>
                  <Checkbox
                    defaultChecked
                    color="success"
                    onClick={() => marcarFavorita(valor.id)}
                  />
                </td>
                <td>{valor.fecha.slice(0, 10)}</td>
                <td>
                  <Button onClick={() => handleEditarNota(valor.id)} variant="contained" color="success">
                    editar
                  </Button>
                </td>
                <td>
                  <Button onClick={() => eliminarNota(valor.id)} variant="contained" color="error">
                    eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
