"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" sticky="top">
      <Container>
        <Link href="/" className="navbar-brand">
          Search GitHub
        </Link>
      </Container>
    </Navbar>
  );
}
