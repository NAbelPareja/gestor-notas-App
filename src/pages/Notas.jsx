import { useEffect, useState } from "react";
import { FormularioNotas } from "../components/FormularioNotas";
import { TablaNotas } from "../components/TablaNotas";
import { BuscadorNotas } from "../components/BuscadorNotas";
import { useNotas } from "../hooks/useNotas";
import { useFormularioNotas } from "../hooks/useFormularioNotas";

export const Notas = () => {
  const { listaNotas, agregarNotas, editarNota, eliminarNota, marcarFavorita } =
    useNotas();

  const { form, setForm, handleInputChange } = useFormularioNotas();

  const [idEditando, setIdEditando] = useState(null);
  const handleGuardarDatos = (e) => {
    e.preventDefault();

    if (idEditando) {
      editarNota(form);
    } else {
      agregarNotas(form);
    }
    setIdEditando(null);
    setForm({
      titulo: "",
      detalle: "",
    });
  };

  const handleEditarNota = (id) => {
    setIdEditando(id);
    const edit = listaNotas.find((valor) => valor.id === id);
    if (edit) {
      setForm(edit);
    }
  };
  const [BuscarTitulo, setBuscarTitulo] = useState("");
  const [BuscarDetalle, setBuscarDetalle] = useState("");
  const [BuscarFecha, setBuscarFecha] = useState("");

  const listaFiltrada = listaNotas.filter((nota) => {
    return (
      nota.titulo.toLowerCase().includes(BuscarTitulo) &&
      nota.detalle.toLowerCase().includes(BuscarDetalle) &&
      nota.fecha.slice(0, 10).includes(BuscarFecha)
    );
  });

  const handleBuscarTitulo = (e) => {
    setBuscarTitulo(e.target.value.toLowerCase());
  };

  const handleBuscarDetalle = (e) => {
    setBuscarDetalle(e.target.value.toLowerCase());
  };

  const handleBuscarFecha = (e) => {
    setBuscarFecha(e.target.value);
    console.log(BuscarFecha);
  };

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(listaNotas));
  }, [listaNotas]);

  return (
    <div className="prin">
      <div className="formulario">
        <FormularioNotas
          form={form}
          handleGuardarDatos={handleGuardarDatos}
          handleInputChange={handleInputChange}
        ></FormularioNotas>
      </div>

      <div className="tablaDatos">
        <BuscadorNotas 
          BuscarTitulo={BuscarTitulo}
          handleBuscarTitulo={handleBuscarTitulo}
          BuscarDetalle={BuscarDetalle}
          handleBuscarDetalle={handleBuscarDetalle}
          BuscarFecha={BuscarFecha}
          handleBuscarFecha={handleBuscarFecha}
          ></BuscadorNotas>

        <TablaNotas
          listaFiltrada={listaFiltrada}
          marcarFavorita={marcarFavorita}
          handleEditarNota={handleEditarNota}
          eliminarNota={eliminarNota}
        ></TablaNotas>
      </div>
    </div>
  );
};
