import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const active = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <header className="header">
      <div className="row content-header">
          <div className="col-12">
            <nav className="header-nav col-md-12">
              <ul className="links-ul nav justify-content-start">
                <li className="nav-item">
                  <NavLink
                    to="/Home"
                    className={({isActive}) => active(isActive)}
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Create"
                    className={({ isActive }) => active(isActive)}
                  >
                    Crear
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Articles"
                    className={({ isActive }) => active(isActive)}
                  >
                    Articulos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className={({ isActive }) => active(isActive)}
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
  );
};
