import "../styles/main.css"
import { Button } from "@mui/material";
export const FormularioNotas = ({
  form,
  handleGuardarDatos,
  handleInputChange,
}) => {
  return (
    <>
      <form onSubmit={handleGuardarDatos} className="form-c">
        <div className="mb-3 ">
          <label htmlFor="titulo" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            required
            name="titulo"
            value={form.titulo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="detalle" className="form-label">
            Detalle
          </label>
          <input
            type="text"
            className="form-control"
            required
            name="detalle"
            value={form.detalle}
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit" variant="contained" color="success" >
          Guardar
        </Button>
      </form>
    </>
  );
};
