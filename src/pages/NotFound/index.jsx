import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import gif from "./giphy.gif";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>
        Opa! Essa página que você está procurando não existe.
      </h1>
      <img
        className={styles.container__gif}
        src={gif}
        alt="John Travolta confused in pixel art from https://giphy.com/"
      />
      <Link to="/">
        <Button text="Voltar" />
      </Link>
    </section>
  );
}
