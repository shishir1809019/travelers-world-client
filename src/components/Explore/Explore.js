import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-main d-flex justify-content-center align-items-center ">
      <div className=" ">
        <h1>
          Explore <br /> <span className="text-warning">Your Travel</span>
        </h1>
        <p>
          Discover your next great adventure, become an explorer to get started!
        </p>
        <Form className=" ">
          <Row>
            <Col>
              <Form.Control placeholder="Where to?" />
            </Col>
            <Col>
              <Form.Control placeholder="When?" />
            </Col>
            <Col>
              <Form.Control placeholder="Travel type" />
            </Col>
            <Col>
              <input
                className="form-control w-75 mx-auto btn btn-warning"
                type="submit"
                value="Find Now"
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Explore;
