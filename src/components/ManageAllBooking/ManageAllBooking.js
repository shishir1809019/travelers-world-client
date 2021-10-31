import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ManageBooking from "../ManageBooking/ManageBooking";

const ManageAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [isLoad, setIsLoad] = useState(null);

  useEffect(() => {
    fetch("https://wicked-blood-69809.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [isLoad]);

  const handleDeleteBooking = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`https://wicked-blood-69809.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remainingUsers = allBookings.filter(
              (MyBooking) => MyBooking._id !== id
            );
            setAllBookings(remainingUsers);
          }
        });
    }
  };

  const handleUpdateBookingStatus = (id) => {
    fetch(`https://wicked-blood-69809.herokuapp.com/bookingStatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Ticket have been confirmed");
          setIsLoad(true);
        }
      });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Ticket status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((manageBooking) => (
            <ManageBooking
              key={manageBooking._id}
              manageBooking={manageBooking}
              handleDeleteBooking={handleDeleteBooking}
              handleUpdateBookingStatus={handleUpdateBookingStatus}
            ></ManageBooking>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllBooking;
