import React from 'react';
import { Col, Card, CardHeader, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import "./index.css";

const Membros = ({ img, nome, cargo }) => {

  return (
    <Col lg="2" md="4" sm="12" id="cardMembros">
      <Card>
        <CardHeader>
          <CardImg alt={nome} src={img} top width="90%" />
        </CardHeader>
        <CardBody>
          <CardTitle tag="h6">
            {nome}
          </CardTitle>
          <CardText>
            {cargo}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Membros;