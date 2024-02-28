import React, { useRef, useState } from "react";
import searchIcon from "../../assets/search-icon.png";

export const Search = ({ articles, setArticles, setText, text }) => {

  const doSearch = (e) => {
    setText(e.target.value.toLowerCase());

    const actualList = articles;
    const query = actualList.filter(
      (objeto) =>
        objeto.title.toLowerCase().includes(text) ||
        objeto.content.toLowerCase().includes(text)
    );

    if (e.target.value !== "" && e.target.value !== null) {
      setArticles(query);
    }
  };

  return (
    <form className="seeker col-md-5">
      <input
        type="text"
        placeholder="Busca un articulo"
        className="form-control"
        name="seeker"
        id="seeker"
        onChange={(e) => doSearch(e)}
      />
    </form>
  );
};
