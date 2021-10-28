import React from "react";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../ContactForm/ContactForm";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
