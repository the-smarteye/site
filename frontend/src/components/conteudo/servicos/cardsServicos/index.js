import React from 'react';
import { Col, Card, CardHeader, CardImg, CardBody, CardTitle, CardFooter, CardText, Button } from 'reactstrap';
import "./index.css";

const CardServicos = ({ icon, title, description }) => {

  return (
    <Col lg="4" md="4" sm="12" id="cardServicos">
      <Card>
        <CardHeader>
          <CardImg alt={title} src={icon} top width="100%" />
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardText>
            {description}
          </CardText>
        </CardBody>
        <CardFooter>
          <Button>
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
}

export default CardServicos;