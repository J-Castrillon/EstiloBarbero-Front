import React, { useContext, useEffect, useReducer, useState } from "react";
import { Article } from "./components/Article";
import { getAll } from "../../Ajax/scripts/articles";
import { Search } from "./Search";
import { ArticleContext } from "../context/articleContext";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const {articless,setArticless} = useContext(ArticleContext); 

  useEffect(() => {
    getter();
  }, []);

  // Funcion de get sobre todos los articulos; 
  const getter = () => {
    setTimeout(async () => {
      const data = await getAll("/allArticles"); 
      setAllArticles(data); 
      setArticles(data);
      setLoading(false);
    }, 500);
  };

  useEffect(()=>{
    setArticless(allArticles); 
  }, [allArticles])

  useEffect(()=>{
    if(text === '' || text === null){
      setArticles(allArticles); 
    }
  }, [text])

  if (loading === true) {
    return <div className="loader"></div>;
  } else {
    return (
      <div className="main-content-allArticles">
        <h2>Todos Nuestros Articulos</h2>
        <Search articles={articles} setArticles={setArticles} setText={setText} text={text}/>

        <div className="allArticles-content">
          {articles.length > 0 &&
            articles.map((element, index) => {
              return (
                <Article
                  element={element}
                  key={`${element._id}`}
                  articles={articles}
                  setArticles={setArticles}
                />
              );
            })}
        </div>
      </div>
    );
  }
};
