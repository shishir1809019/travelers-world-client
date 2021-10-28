import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Travellers world
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user.email && (
                <Nav.Link as={Link} to="/myBookings">
                  My Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/manageAllBooking">
                  Manage all Booking
                </Nav.Link>
              )}
              {user.email ? (
                <Nav.Link onClick={logOut} as={Link} to="/login">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              <Navbar.Text className="ms-5">
                Signed in as:{" "}
                <a href="#login">
                  {user.displayName
                    ? user?.displayName
                    : user?.email?.substring(0, user?.email.lastIndexOf("@"))}
                </a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
