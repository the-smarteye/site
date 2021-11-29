import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./index.css";
import CardServicos from './cardsServicos';

// Importando as imagens dos serviços
import imgUm from "../../../assets/imagens/servicos/a-plataforma-smarteye.png";
import imgDois from "../../../assets/imagens/servicos/monitoramento-e-recursos.png";
import imgTres from "../../../assets/imagens/servicos/visualizacao-em-tempo-real.png";

const Servico = () => {
  return (
    <Container id="servicos">
      <Row id="linhaUm">
        <Col xs="12">
          <h1>Serviços</h1>
        </Col>
      </Row>

      <Row id="linhaDois">
        <CardServicos
          icon={imgUm} 
          title="A plataforma SmartEye"
          description="Um software web acoplado a um conjunto de sensores ligados a Cidades Inteligentes que 
            captura a quantidade de pessoas em determinados locais."
        />

        <CardServicos 
          icon={imgDois} 
          title="Monitoramento e Recursos"
          description="Atualmente o SmartEye pode contar com dados de câmeras, sensores infra-vermelhos, sinais de celular e redes de 
            internet para contar pessoas."
        />

        <CardServicos 
          icon={imgTres} 
          title="Visualização em Tempo Real"
          description="Monitoramento e visualização em tempo real do ambiente no qual ele está inserido. Fornecendo dados para tomada 
            de decisição rápida e constante."
        />
        
      </Row>
    </Container>
  );
}

export default Servico;