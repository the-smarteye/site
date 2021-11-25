import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./index.css";

const Contato = () => {

  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.360896943425!2d-37.324045184712375!3d-5.205846853926764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba07a2db24d653%3A0x894b9f9957afa43f!2sIncubadora%20Tecnol%C3%B3gica%20e%20do%20Agroneg%C3%B3cio%20de%20Mossor%C3%B3%20-%20IAGRAM!5e0!3m2!1spt-BR!2sbr!4v1637864236562!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'; 
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

  return (
    <Container>
      <Row id="linhaUm">
        <Col xs="12">
          <h1>Contatos</h1>
        </Col>
      </Row>

      <Row id="linhaDois">
        <Col lg="6" md="6" sm="12" id="colUmLinhaDois">
          <h6>Formulário para Contato</h6>

          <Col lg="10" md="10" sm="10" id="formContato">
            <Form>
              <FormGroup row>
                <Label
                  for="exampleNome"
                  sm={12}
                >
                  Nome
                </Label>
                <Col sm={12}>
                  <Input
                    id="exampleNome"
                    name="nome"
                    placeholder="Digite seu nome"
                    type="text"
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label
                  for="exampleEmail"
                  sm={12}
                >
                  Email
                </Label>
                <Col sm={12}>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Digite seu email"
                    type="email"
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label
                  for="exampleAssunto"
                  sm={12}
                >
                  Assunto
                </Label>
                <Col sm={12}>
                  <Input
                    id="exampleAssunto"
                    name="assunto"
                    placeholder="Informe o assunto"
                    type="text"
                    required
                  />
                </Col>
              </FormGroup>
                          
              <FormGroup row>
                <Label
                  for="exampleText"
                  sm={12}
                >
                  Mensagem
                </Label>
                <Col sm={12}>
                  <Input
                    id="exampleText"
                    name="text"
                    placeholder="Escreva o que deseja"
                    type="textarea"
                    rows="3"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12} id="colBotaoForm">
                  <Button type="submit" id="btnEnviarForm">
                    Enviar
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Col>

        <Col lg="6" md="6" sm="12" id="mapaLocalizacao">
          <h6>Localização</h6>
          <Iframe container iframe={iframe} />
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;