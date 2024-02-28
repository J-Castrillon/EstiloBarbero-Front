import React, { useContext, useEffect, useReducer, useState } from "react";
import { ArticleContext } from "../context/articleContext";
import { Global } from "../../helpers/global";
import img from "../../assets/wallpaper.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../../Ajax/scripts/articles";


export const Article = () => {
  const { articless, setArticless } = useContext(ArticleContext);
  const [article, setArticle] = useState([]);
  const ref = useParams();
  const navigator = useNavigate(); 


  useEffect(() => {
    const specific = articless.filter((element) => element._id == ref.id)[0];
    setArticle(specific);
  }, [articless]);

  const deleteArticle = async (e, element)=>{
    const deletes = await remove(`article/${element._id}`);

    if(await deletes.message === 'Deleted'){
      navigator("/Home"); 
    }
  }

  return (
    <div className="specific-article">
      <header className="specific-header" >
        <img
          className="specific-image"
          src={
            article.image !== "default.png"
              ? `${Global.url}/show-image/${article.image}`
              : img
          }
          alt={article?.dates}
        />
      </header>
      <main className="specific-main">
        <h3>{article?.title}</h3>
        <p className="specific-content">{article?.content}</p>
      </main>
      <footer className="specific-footer">
        <p>Fecha de creación: {new Date(article?.dates).toLocaleString('es',{day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
        <div className="specific-buttons-footer">
          <button
            className="btn btn-primary edit-button"
            onClick={(e) => navigator(`/Edit/${article._id}`)}
          >
            Editar
          </button>
          <button type="button" className="btn btn-primary delete-button" onClick={e=>deleteArticle(e,article)}>
            Eliminar
          </button>
        </div>
      </footer>
    </div>
  );
};
