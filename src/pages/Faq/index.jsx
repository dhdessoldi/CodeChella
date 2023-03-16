import SimpleAccordion from "components/Accordion";
import Banner from "components/Banner";
import React from "react";
import styles from "./Faq.module.css";

export default function Faq() {
  const accordions = [
    {
      question: "Quais serão as atrações?",
      answer:
        "Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!",
    },
    {
      question: "Qual é a classificação etária?",
      answer:
        "Será permitida a entrada apenas de pessoas maiores de 18 anos, ou maiores de 16 anos acompanhadas de um responsável",
    },
    {
      question: "Quais são os setores disponíveis?",
      answer:
        "Os setores disponíveis são: pista Comum, pista premium, cadeiras térreo e cadeiras superiores",
    },
    {
      question: "Quais são os itens proibidos?",
      answer:
        "Não será permitida a entrada de pessoas portando objetos cortantes e pontiagudos, armas de qualquer tipo, bebidas alcoólicas, guarda-chuva e aerosóis inflamáveis.",
    },
  ];
  return (
    <>
      <Banner image="faqs" title="Informações Gerais" />
      <section className={styles.container}>
        <h2 className={styles.container__title}>Perguntas Frequentes:</h2>
        {accordions.map((accordion) => (
          <SimpleAccordion
            question={accordion.question}
            answer={accordion.answer}
          />
        ))}
      </section>
    </>
  );
}
