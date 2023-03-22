import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>
        Opa! Essa página que você está procurando não existe.
      </h1>
      <div className={styles.container__gif}>
        <iframe
          title="John Travolta is lost"
          src="https://giphy.com/embed/26AHs3p7U7H5MU2gU"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/">
        <Button text="Voltar" />
      </Link>
    </section>
  );
}
