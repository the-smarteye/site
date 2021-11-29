import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./index.css";
import imgBlur from '../../../assets/imagens/sobre/blured.png';
import Group from './grupoCards';

// Imagens do sobre
import imgUm from '../../../assets/imagens/sobre/controle-de-espacos.png';
import imgDois from '../../../assets/imagens/sobre/plataforma-em-tempo-real.png';
import imgTres from '../../../assets/imagens/sobre/gestao-inteligente.png';
import imgQuatro from '../../../assets/imagens/sobre/confiabilidade.png';

const Sobre = () => {
  return (
      <Container id="sobre">
        <Row id="linhaUm">
          <Col xs="12">
            <h1>Sobre</h1>
          </Col>
        </Row>

        <Row id="linhaDois">
          <Col lg="6" md="6" sm="12">
            <img src={imgBlur} alt="Imagem Blured" id="imgBlured" />
          </Col>
          <Col lg="6" md="6" sm="12" id="sobreSmartEye">
            O SmartEye é uma solução integrada de hardware e software com o intuito de monitorar o ambiente no qual está inserido, 
            através de sensores e Inteligência Artificial (IA), gerando relatórios inteligentes e transparência para as atividades que 
            ali estão sendo executadas. O sensoriamento é baseado em sistemas embarcados usando Arduino, e isso faz com que um grande 
            número de variáveis possa ser observado a depender do que for interessante para o usuário final.
            
          </Col>
        </Row>

        <Row id="linhaTres">
          <Group
						icon={imgUm} title="Controle de Espaços"
						text="Em meio à pandemia de COVID-19, evitar aglomerações é a melhor maneira de prevenção."
          />

          <Group
						icon={imgDois} title="Plataforma em Tempo Real"
						text="Tecnologias de Cidades Inteligentes são úteis dentro e fora de crises como essa."
          />

          <Group
						icon={imgTres} title="Gestão Inteligente"
						text="Uso de tecnologias de cidades inteligentes voltado para tomada de decisão em mobilidade urbana pode transformar esse 
              cenário."
          />

          <Group
						icon={imgQuatro} title="Confiabilidade"
						text="Acesso fácil, rápido com segurança, confiabilidade e integridade."
          />
        </Row>
      </Container>
  );
}

export default Sobre;