import Banner from "components/Banner";
import Button from "components/Button";
import Card from "components/Card";
import Lineup from "components/Lineup";
import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  const lineup1 = [
    {
      name: "Python Maiden",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "Apollo Client 2001",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "Bon Java",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "NickCallback",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "Linkin Promises",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Fullstack Fighters",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Papa React",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Angular in Chains",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Agnostic Front-end",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "SlipkNode",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "Pink Flutter",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "Kiss",
      fontSize: "32px",
      fontWeight: "500",
    },
  ];
  const lineup2 = [
    {
      name: "Dua Lib",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "The Backnd",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "CSS Styles",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "ArrayAna Grande",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "DJ Query",
      fontSize: "40px",
      fontWeight: "700",
    },
    {
      name: "Miley Cypress",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "The Bootstrap Boys",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Json Derulo",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "CloudPlay",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Dev Lovato",
      fontSize: "32px",
      fontWeight: "700",
    },
    {
      name: "Pink Flutter",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "Kylie MiLOG",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "Jenkins Brothers",
      fontSize: "32px",
      fontWeight: "500",
    },
    {
      name: "Rubycat Dolls",
      fontSize: "32px",
      fontWeight: "500",
    },
  ];
  return (
    <>
      <Banner image="home" title="Boas-vindas ao #CodeChella2023!" />
      <section className={styles.container}>
        <Card
          image="/assets/posts/home-frame-1.svg"
          title="< 11 e 12 de Março >
Aluródromo de São Paulo"
          text="Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!"
        />
        <Button link='/form'>
            <p>Comprar ingresso!</p>
            <img src="/assets/icons/ticket.svg" alt="" />
        </Button>
        <h2 className={styles.title}>/Line-Up/</h2>
        <Lineup
          lineup={lineup1}
          date="SÁBADO <11/03>"
          mainEvent="System of a Dom"
        />
        <Lineup
          lineup={lineup2}
          date="DOMINGO <12/03>"
          mainEvent="Lana Del Ploy"
        />
        <div
          className={styles.image}
        />
      </section>
    </>
  );
}
