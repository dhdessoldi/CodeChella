import Banner from "components/Banner";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import { TicketContext } from "contexts/Ticket";
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate('/ticket')
  };

  return (
    <>
      <Banner image="form" title="Garanta seu Ingresso" />
      <section className={styles.container}>
        <form className={styles.container__form} onSubmit={onSubmit}>
          <h2 className={styles.container__title}>
            Preencha o formulário a seguir:
          </h2>
          <Input
            label="Nome Completo:"
            type="text"
            value={name}
            onChange={(value) => setName(value)}
            placeholder="Insira seu nome completo"
          />
          <Input
            label="Email:"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
            placeholder="Exemplo: codechella@codechella.com"
          />
          <div className={styles.container__row}>
            <Dropdown
              label="Tipo de ingresso"
              value={place}
              onChange={(value) => setPlace(value)}
            />
            <Input
              label="Data de nascimento:"
              type="date"
              value={birthdate}
              onChange={(value) => setBirthdate(value)}
              placeholder=""
            />
          </div>
          <div className={styles.container__button}>
            <Button text='Comprar ingresso!' />
          </div>
        </form>
      </section>
    </>
  );
}
