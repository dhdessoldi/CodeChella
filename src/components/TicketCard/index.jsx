import React from "react";
import styles from "./TicketCard.module.css";
import logo from "./logo.svg";
import qrcode from "./qrcode.svg";
import icon from "./icon.svg";

export default function TicketCard({ name, date, place }) {
  return (
    <sextion className={styles.container}>
      <div className={styles.container__header}>
        <img src={logo} alt="" />
        <img src={icon} alt="" />
      </div>
      <img src={qrcode} alt="" />
      <div className={styles.container__infos}>
        <p className={styles.container__infos_name}>Daniel Dessoldi</p>
        <p className={styles.container__infos_text}>Ingresso Cortesia</p>
        <p className={styles.container__infos_text}>Pista premium</p>
        <p className={styles.container__infos_text}>Data: 11/03</p>
        <p className={styles.container__infos_text}>Local: São Paulo</p>
      </div>
    </sextion>
  );
}
