import Banner from "components/Banner";
import TicketCard from "components/TicketCard";
import { TicketContext } from "contexts/Ticket";
import {React, useContext} from "react";
import styles from "./Ticket.module.css"

export default function Ticket() {
  const regexPlace = new RegExp('\\w+\\s\\w+');
  const regexDate = new RegExp('\\d.+');
  const {name, place, birthdate, email} = useContext(TicketContext);
  const realPlace = regexPlace.exec(place)
  const date = regexDate.exec(place)
  return (
    <>
      <Banner image="ticket" title="Seu ingresso está aqui!" />
      <section className={styles.container}>
        <h2 className={styles.container__title}>
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </h2>
        <TicketCard name={name} place={realPlace} date={date}/>
      </section>
    </>
  );
}
