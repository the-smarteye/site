import "./App.css";
import React from 'react';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import Sobre from './components/conteudo/sobre';
import Servico from './components/conteudo/servicos';
import Equipe from './components/conteudo/equipe';
import Contato from './components/conteudo/contatos';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Sobre />
      <Servico />
      <Equipe />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
