import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container" id="services">
      <h1 className="my-5 text-center">Our Most Popular Adventures</h1>

      <Row xs={1} md={3} className="g-4 mb-3">
        {services.map((medicine) => (
          <Service key={medicine.id} medicine={medicine}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
