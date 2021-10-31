import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, url, place, price, description } = props.service;
  console.log(props);
  return (
    <Col>
      <Card className="service-card">
        <Card.Img variant="top" height="300px" src={url} />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <Link to={`/service/${_id}`}>
            <Button variant="warning">Book Your Ticket</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
