import React from "react";

export const About = () => {
  return (
    <div className="contact-main-content container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <h3>Contactate con nosotros</h3>
        <form className="col-md-5 form-contact">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              autoComplete=""
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@email.com"
              autoComplete=""
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              placeholder="Contraseña"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje:
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              placeholder="Escribe aqui"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-contact">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
