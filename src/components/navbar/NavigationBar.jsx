import React from "react";
import styles from "./style.module.css";
import { Button, Container, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function NavigationBar() {
  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div>
            <NavbarBrand href="/">
              <img
                src="assets/img/logo.png"
                alt="logo"
                className={styles.logo}
              />
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
          </div>
          <div className={styles.box1}>
            <Nav className={styles.menu}>
              <Nav.Link href="#section2" className={styles.item}>Our Services</Nav.Link>
              <Nav.Link href="#section2" className={styles.item}>Why Us</Nav.Link>
              <Nav.Link href="#section2" className={styles.item}>Testimonial</Nav.Link>
              <Nav.Link href="#section2" className={styles.item}>FAQ</Nav.Link>
            </Nav>
            <Button href="/" className={styles.btn}>Register</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
