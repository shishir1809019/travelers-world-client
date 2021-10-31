import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://wicked-blood-69809.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container" id="services">
      <h1 className="my-5 text-center">Our Most Popular Adventures</h1>

      {services.length ? (
        <Row xs={1} md={3} className="g-4 mb-3">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      ) : (
        <div className="d-flex justify-content-center mb-3">
          <div className="spinner-border text-success " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
