import React from "react";

const Rodape = () => {
  return (
    <footer className="container-fluid text-center">
      <a href="#myPage" title="To Top">
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>
        Site criado no curso de Reginaldo Santos usando template bootstrap.{" "}
      </p>
      <p>
        Aluno: Ricardo Rodrigues -{" "}
        <a href="http://www.rrsantos.com.br" title="Visit RRSantos">
          www.rrsantos.com.br
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
