import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./BookNow.css";

const BookNow = () => {
  const { id } = useParams();

  const history = useHistory();
  const [service, setService] = useState({});

  const handleDetailButton = () => {
    history.push("/home");
  };
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://wicked-blood-69809.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "pending";
    console.log(data);
    fetch("https://wicked-blood-69809.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order proceed successfully");
          // reset();
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="text-center">
        <h2>{service.place}</h2>
        <img className="w-75 rounded " src={service.url} alt="" />
      </div>
      <div>
        <h2>Fill Up the form for buy your ticket</h2>
        <form
          className="form-main form-group"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form-control"
            defaultValue={user.displayName}
            {...register("name")}
          />
          <input
            className="form-control"
            placeholder="Enter Your phone number"
            type="number"
            {...register("number")}
          />
          <input
            className="form-control"
            placeholder="Enter your destination"
            {...register("to", { required: true })}
          />
          <input
            className="form-control"
            placeholder="Enter you are from"
            {...register("from", { required: true })}
          />
          <input
            className="form-control"
            placeholder="Date(DD/MM/YY) of start your journey "
            {...register("date", { required: true })}
          />{" "}
          <br />
          <input
            className="form-control btn btn-outline-secondary"
            type="submit"
            value="BOOK NOW"
          />
        </form>
      </div>
    </div>
  );
};

export default BookNow;
