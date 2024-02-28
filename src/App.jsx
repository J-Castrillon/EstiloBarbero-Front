import { useState } from "react";
import { Rutas } from "./routing/Rutas";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { ArticleContext } from "./components/context/articleContext";

function App() {
  const [count, setCount] = useState(0);

  const [articless, setArticless] = useState([]); 

  return (
    <div className="App">
      <ArticleContext.Provider value={{ articless, setArticless }}>
        <Rutas />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
