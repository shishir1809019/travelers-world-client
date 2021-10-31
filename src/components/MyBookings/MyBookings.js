import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    fetch(`https://wicked-blood-69809.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
      });
  }, []);

  const handleDeleteUser = (id) => {
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
            const remainingUsers = myBookings.filter(
              (MyBooking) => MyBooking._id !== id
            );
            setMyBookings(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Ticket status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {myBookings.map((myBooking) => (
            <MyBooking
              key={myBooking._id}
              handleDeleteUser={handleDeleteUser}
              myBooking={myBooking}
            ></MyBooking>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBookings;
