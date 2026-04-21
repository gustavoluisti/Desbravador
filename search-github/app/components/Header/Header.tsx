"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" sticky="top">
      <Container>
        <Navbar.Brand>Search GitHub</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
