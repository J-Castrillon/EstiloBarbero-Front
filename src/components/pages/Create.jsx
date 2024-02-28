import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { createUpdate } from "../../Ajax/scripts/articles";

export const Create = () => {
  const { serialized } = useForm({});
  const [errors, setErrors] = useState("");

  const send = async (e) => {
    e.preventDefault();

    const serial = serialized(e.target);

    // Create article;
    const save = await createUpdate("save", serial, "POST");
    if (save.parameters) {
      // SendImage;
      if (e.target.file0.files[0]) {
        const formData = new FormData();
        formData.append("file0", e.target.file0.files[0]);
        const saveImage = await createUpdate(
          `send-image/${save.article?._id}`,
          formData,
          "POST",
          true
        );
      }

      alert("Articulo almacenado exitosamente");

      for (let element of e.target) element.value = "";
    } else {
      setErrors("Datos Incorrectos");
    }
  };

  return (
    <div className="contact-main-content container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <h3 className="titles-create">Crear Articulo</h3>
        <form className="col-md-5 form-contact form-create" onSubmit={send}>
          <strong id="errorMessage">{errors !== "" && `${errors} ⚠`} </strong>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Titulo:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Titulo del Articulo"
              autoComplete=""
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Contenido:
            </label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              placeholder="Escribe Aqui El Contenido Del Articulo"
              rows="8"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Selecciona una imagen:
            </label>
            <input
              type="file"
              className="form-control"
              name="file0"
              id="file0"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            Publicar Articulo
          </button>
        </form>
      </div>
    </div>
  );
};
