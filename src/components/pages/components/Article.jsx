import React, { useEffect, useState } from "react";
import img from "../../../assets/wallpaper.jpg";
import { useNavigate } from "react-router-dom";
import { Global } from "../../../helpers/global";
import { remove } from "../../../Ajax/scripts/articles";

export const Article = ({ element, setArticles, articles }) => {
  // Provisional;
  const [array, setArray] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    setArray(element); 
  }, []);

  const deleteArticle = async (e, element)=>{
    const deletes = await remove(`article/${element._id}`);

    if(await deletes.message === 'Deleted'){
      setTimeout(()=>{
        setArticles(prevArticles => {
          return prevArticles.filter(actualElement => actualElement._id !== element._id);
        });
      },100);
    }
  }

  return (
    <div className="main-content-article row d-flex justify-content-center align-items-center">
      <article className="article">
        <header className="header-article" onClick={(e) => navigator(`/Article/${element._id}`)}>
          <img
            className="image-article"
            src={element.image !== 'default.png' ? `${Global.url}/show-image/${element.image}` : img}
            alt={element?.dates}
          />
        </header>
        <main className="main-article" onClick={(e) => navigator("/Article")}>
          <h3>{element?.title}</h3>
          <p className="content-article-paragraph">{element?.content.slice(0,100)}...</p>
        </main>
        <footer className="footer-article">
          <p>{element?.dates}</p>
          <div className="buttons-article">
            <button
              className="btn btn-primary edit-button"
              onClick={(e) => navigator(`/Edit/${element._id}`)}
            >
              Editar
            </button>
            <button type="button" className="btn btn-primary delete-button" onClick={e => deleteArticle(e, element)}>Eliminar</button>
          </div>
        </footer>
      </article>
    </div>
  );
};
