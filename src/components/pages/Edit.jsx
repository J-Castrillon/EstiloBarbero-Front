import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { createUpdate } from "../../Ajax/scripts/articles";
import { ArticleContext } from "../context/articleContext";
import { useParams } from "react-router-dom";
import img from "../../assets/wallpaper.jpg";
import { Global } from "../../helpers/global";

export const Edit = () => {
  const { serialized } = useForm({});
  const [errors, setErrors] = useState("");
  const { articless, setArticless } = useContext(ArticleContext);
  const params = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const specficEdit = articless.filter(
      (element) => (element._id = params.id)
    )[0];

    if (specficEdit) setArticle(specficEdit);
  }, []);

  const send = async (e) => {
    e.preventDefault();

    const serial = serialized(e.target);

    if (e.target.title.value === "") {
      e.target.title.value = article.title;
    }

    if (e.target.content.value === "") {
      e.target.content.value = article.content;
    }

    // Create article;
    const save = await createUpdate(
      `article/${article._id}`,
      serial,
      "PUT",
      false
    );


    if (await save.parameters) {
      if (e.target.file0.files[0]) {
        const formData = new FormData();
        formData.append("file0", e.target.file0.files[0]);

        const saveImage = await createUpdate(
          `send-image/${article._id}`,
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
        <h3 className="titles-create">Editar artículo</h3>
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
              placeholder={article.title}
              autoComplete=""
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
              placeholder={article.content}
              rows="8"
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
