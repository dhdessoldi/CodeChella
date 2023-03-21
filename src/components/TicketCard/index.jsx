import React from "react";
import styles from "./TicketCard.module.css";
import logo from "./logo.svg";
import qrcode from "./qrcode.svg";
import icon from "./icon.svg";

export default function TicketCard({ name, place, date }) {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <img src={logo} alt="" />
        <img src={icon} alt="" />
      </div>
      <div className={styles.container__content}>
        <img className={styles.container__qrcode} src={qrcode} alt="" />
        <div className={styles.container__infos}>
          <p className={styles.container__infos_name}>{name}</p>
          <p className={styles.container__infos_text}>Ingresso Cortesia</p>
          <p className={styles.container__infos_text}>{place}</p>
          <p className={styles.container__infos_text}>Data: {date}</p>
          <p className={styles.container__infos_text}>Local: São Paulo</p>
        </div>
      </div>
    </section>
  );
}
