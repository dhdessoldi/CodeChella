import Banner from "components/Banner";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import { TicketContext } from "contexts/Ticket";
import { React, useContext } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const {
    name,
    setName,
    email,
    setEmail,
    place,
    setPlace,
    birthdate,
    setBirthdate,
  } = useContext(TicketContext);

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Banner image="form" title="Garanta seu Ingresso" />
      <section className={styles.container}>
        <form action="" onSubmit={onSubmit}>
          <h2 className={styles.container__title}>
            Preencha o formulário a seguir:
          </h2>
          <Input
            label="Nome Completo:"
            type="text"
            value={name}
            onChange={(value) => setName(value)}
            required
            placeholder="Insira seu nome completo"
          />
          <Input
            label="Email:"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
            required
            placeholder="Exemplo: codechella@codechella.com"
          />
          <Dropdown
            label="Tipo de ingresso"
            value={place}
            onChange={(value) => setPlace(value)}
            required
          />
          <Input
            label="Data de nascimento:"
            type="date"
            value={birthdate}
            onChange={(value) => setBirthdate(value)}
            required
            placeholder=""
          />
          <div className={styles.container__button}>
            <Button link='/ticket'>
              <p>Comprar!</p>
              <img src="/assets/icons/ticket.svg" alt="" />
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
