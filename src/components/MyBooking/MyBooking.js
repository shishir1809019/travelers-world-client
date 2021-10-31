import React from "react";

const MyBooking = (props) => {
  const { _id, from, to, status } = props?.myBooking;
  const { handleDeleteUser } = props;
  return (
    <tr>
      <td>{from}</td>
      <td>{to}</td>
      <td>{status}</td>
      <td>
        {" "}
        <button
          onClick={() => {
            handleDeleteUser(_id);
          }}
        >
          Cancel
        </button>{" "}
      </td>
    </tr>
  );
};

export default MyBooking;
