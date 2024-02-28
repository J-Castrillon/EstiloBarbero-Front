import React from "react";
import { Logo } from "./components/Logo";
import { Link } from "react-router-dom";
import { Article } from "./components/Article";
import { Articles } from "./Articles";

export const Home = () => {
  return (
    <div className="home-content container-fluid">
      <section className="home-introduction row d-flex justify-content-center align-items-center">
        <div className="logotype-home col-md-6 d-flex">
          <Logo />

          <div className="col-md-9 d-flex mt-5">
            <p className="description-about-us-home">
              En Estilo Barbero nos enorgullecemos de ofrecer a nuestros
              clientes una experiencia única en el cuidado del cabello y la
              barba. Desde nuestro ambiente clásico hasta nuestros talentosos
              barberos, brindamos un servicio excepcional y resultados de
              calidad. Nuestro equipo de barberos expertos está dedicado a
              ayudar a nuestros clientes a lucir y sentirse mejor. Ya sea que
              necesites un corte de cabello clásico, un afeitado preciso o un
              tratamiento de barba, estamos aquí para superar tus expectativas.
            </p>
          </div>

          <button type="button" className="btn btn-primary contact-us">
            <Link to="/About">Contactanos</Link>
          </button>
        </div>
        <div className="info-home col-md-6 d-flex"></div>

      </section>

      <section className="articles-home-section row d-flex justify-content-center align-items-center">
        <h2 className="title-section-articles">
          Conoce Un Poco de Nuestro Trabajo
        </h2>
        
        <Articles /> 
      </section>
    </div>
  );
};
