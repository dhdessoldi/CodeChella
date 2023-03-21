import Banner from "components/Banner";
import Card from "components/Card";
import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <>
      <Banner image="experience" title="A Experiência" />
      <section className={styles.container}>
        <Card
          image="/assets/posts/experience-frame-1.svg"
          title="Acessibilidade e Inclusão"
          text="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"
        />
        <Card
          style={{flexDirection:'row-reverse'}}
          image="/assets/posts/experience-frame-2.svg"
          title="Sustentabilidade"
          text="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
        />
        <Card
          image="/assets/posts/experience-frame-3.svg"
          title="Atrações"
          text="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"
        />
      </section>
    </>
  );
}
