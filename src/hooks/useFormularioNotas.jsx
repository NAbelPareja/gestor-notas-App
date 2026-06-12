import { useState } from "react";

export const useFormularioNotas = () => {

    
    const [form, setForm] = useState({
    titulo: "",
    detalle: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return {form, setForm, handleInputChange}
}
