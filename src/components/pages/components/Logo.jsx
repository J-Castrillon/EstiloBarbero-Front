import React from "react";
import logo from '../../../assets/EstiloBarbero.png'; 

export const Logo = () => {
  return (
    <div className="col-md-6 logotype-section">
      <div className="logotype-content">
        {/* <h1 className="barber-logotype">Estilo Barbero</h1> */}
        <img src={logo} alt="Estilo Barbero Logotipo" title="Estilo Barbero"/>
      </div>
    </div>
  );
};
