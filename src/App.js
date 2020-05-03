import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Inicio from "./components/Inicio";
import Servicos from "./components/Servicos";
import Portifolio from "./components/Portifolio";
import Precos from "./components/Precos";
import Contatos from "./components/Contatos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route path="/" exact component={Inicio} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/portifolio" component={Portifolio} />
        <Route path="/precos" component={Precos} />
        <Route path="/contatos" component={Contatos} />

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
