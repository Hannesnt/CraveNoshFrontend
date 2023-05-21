import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavbarCom({ setSearchText, searchText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchText}`;
  };
  return (
    <Navbar bg="purple" expand="lg">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setSearchText("")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-2 col-lg-9">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/recept">RECEPT</Nav.Link>
            <Nav.Link href="/favorites">MINA RECEPT</Nav.Link>
            <Nav.Link href="/about">OM CRAVE NOSH</Nav.Link>
            <Nav.Link href="/contact">KONTAKT</Nav.Link>
            <div className="instagramDivNav">
              <a
                className="FontIcon"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/cravenosh/"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "1.7rem" }}
                />
              </a>
            </div>
          </Nav>
          <Form
            className="d-flex searchBarForm col-lg-3 justify-content-lg-end "
            onSubmit={handleSubmit}
          >
            <Nav.Link
              className="searchBtn"
              href={`/search?query=${searchText}`}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#b0b4ba", fontSize: "1.5rem" }}
              />
            </Nav.Link>
            <Form.Control
              type="search"
              placeholder="Sök"
              className="me-2 shadow-none"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;