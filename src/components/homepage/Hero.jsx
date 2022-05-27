import React from "react";
import styles from "./style.hero.module.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Container className={styles.container}>
          <div className={styles.box1}>
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            
            {/* <LinkContainer to="/search"> */}
                <Button className={styles.btn}>Mulai Sewa Mobil</Button>
            {/* </LinkContainer> */}
            
          </div>
          <div className={styles.box2}>
            <div className={styles.bgHero}></div>
            <img
              src="assets/img/hero.png"
              alt="hero"
              className={styles.imgHero}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
