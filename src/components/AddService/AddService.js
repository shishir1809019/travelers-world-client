import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://wicked-blood-69809.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("A new service have added successfully");
          reset();
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="my-3">Add A New Service</h3>
      <form className="form-main form-group" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          placeholder="Enter the place name"
          {...register("place", { required: true })}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Enter approximate cost per day"
          {...register("price", { required: true })}
        />
        <textarea
          className="form-control"
          placeholder="Enter description"
          {...register("description", { required: true })}
        ></textarea>
        <input
          className="form-control"
          placeholder="Enter a photo url"
          {...register("url", { required: true })}
        />

        <input className="form-control btn-outline-secondary" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
<h3>Add A New Service</h3>;
