import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo-footer.svg";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo da CodeChella" />
        </Link>
        <div className={styles.social}>
        <p>Acesse nossas redes:</p>
        <ul className={styles.links}>
          <a href="https://web.whatsapp.com"><img src="/assets/icons/whatsapp.svg" alt="logo do whatsapp" /></a>
          <a href="https://twitch.com"><img src="/assets/icons/twitch.svg" alt="logo do whatsapp" /></a>
          <a href="https://instagram.com"><img src="/assets/icons/instagram.svg" alt="logo do whatsapp" /></a>
          <a href="https://twitter.com"><img src="/assets/icons/twitter.svg" alt="logo do whatsapp" /></a>
        </ul>
        </div>
      </div>
      <p>Desenvolvido por Daniel.<br/>
      Projeto fictício sem fins comerciais.</p>
    </footer>
  );
}
