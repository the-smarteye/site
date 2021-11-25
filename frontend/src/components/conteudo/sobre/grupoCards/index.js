import React from 'react';
import { Row, Col } from 'reactstrap';
import "./index.css";

const Group = ({ icon, title, text }) => {
	return (
    <Row className="group">
      <Col className="icon" xs="4" sm="12">
        <img src={icon} alt={title} />
      </Col>

      <Col className="content" xs="8" sm="12">
        <h2>{title}</h2>
        <span className="text">
          {text}
        </span>
      </Col>
    </Row>
	);
}

export default Group;