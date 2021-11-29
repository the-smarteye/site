import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./index.css";
import Membros from './cardsMembros';

// Imagens dos membros da equipe
import victoriaIris from "../../../assets/imagens/equipe/VictoriaIris.jpg";
import leonardoCasillo from "../../../assets/imagens/equipe/LeonardoCasillo.jpg";
import leonardoFranca from "../../../assets/imagens/equipe/LeonardoFrança.jpg";
import miltonMendes from "../../../assets/imagens/equipe/MiltonMendes.jpg";
import rogerioFernandes from "../../../assets/imagens/equipe/RogerioFernandes.jpg";

const Equipe = () => {

  return (
    <Container id="equipe">
      <Row id="linhaUm">
        <Col xs="12">
          <h1>Equipe</h1>
        </Col>
        <Col xs="12" id="subtituloEquipe">
          <p>
            O Smarteye conta com uma equipe com um amplo leque de expertises para suprir as necessidades da proposta, entre elas 
            inteligencia artificial, IoT , manejo ambiental e desenvolvimento.
          </p>
        </Col>
      </Row>

      <Row id="linhaDois">
        <Membros 
          img={victoriaIris}
          nome="Victória Íris"
          cargo="Lorem Ipsum"
        />

        <Membros 
          img={leonardoCasillo}
          nome="Leonardo Casillo"
          cargo="Lorem Ipsum"
        />

        <Membros 
          img={leonardoFranca}
          nome="Leonardo França"
          cargo="Lorem Ipsum"
        />

        <Membros 
          img={miltonMendes}
          nome="Milton Mendes"
          cargo="Lorem Ipsum"
        />

        <Membros 
          img={rogerioFernandes}
          nome="Rogério Fernandes"
          cargo="Lorem Ipsum"
        />
      </Row>
    </Container>
  );
}

export default Equipe;