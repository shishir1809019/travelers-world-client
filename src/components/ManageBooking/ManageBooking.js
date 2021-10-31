import React from "react";

const ManageBooking = (props) => {
  const { name, _id, from, to, status } = props?.manageBooking;
  const { handleDeleteBooking, handleUpdateBookingStatus } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>
        {status} <span> </span>{" "}
        <button onClick={() => handleUpdateBookingStatus(_id)}>Confirm</button>
      </td>
      <td>
        {" "}
        <button onClick={() => handleDeleteBooking(_id)}>delete</button>{" "}
      </td>
    </tr>
  );
};

export default ManageBooking;
