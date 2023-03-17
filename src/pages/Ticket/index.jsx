import Banner from "components/Banner";
import TicketCard from "components/TicketCard";
import React from "react";
import styles from "./Ticket.module.css"

export default function Ticket() {
  return (
    <>
      <Banner image="ticket" title="Seu ingresso está aqui!" />
      <section className={styles.container}>
        <h2 className={styles.container__title}>
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </h2>
        <TicketCard />
      </section>
    </>
  );
}
