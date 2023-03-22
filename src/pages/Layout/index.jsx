import Banner from "components/Banner";
import Card from "components/Card";
import React from "react";
import styles from "./Layout.module.css";

export default function Layout() {
  const layout = [
    {
      name: "Pista Premium",
      color: "#0E7DF1",
    },
    {
      name: "Pista Comum",
      color: "#FE016E",
    },
    {
      name: "Cadeiras térreo",
      color: "#01A89E",
    },
    {
      name: "Cadeiras superiores",
      color: "#3F51B5",
    },
  ];

  return (
    <>
      <Banner image="layout" title="Mapa de Setores" />
      <section className={styles.container}>
        <div className={styles.layout}>
          <img className={styles.layout__image} src="/assets/posts/sector-map.png" alt="" />
          <ul className={styles.layout__list}>
            <li className={styles.layout__list_legend}>Legenda:</li>
            {layout.map((sector) => (
              <li key={sector.name} className={styles.layout__sector}>
                <div className={styles.layout__sector_color} style={{ backgroundColor: `${sector.color}` }}></div>
                <p className={styles.layout__sector_name}>{sector.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={styles.container__title}>Mais detalhes sobre os setores:</h3>
        <div className={styles.container__cards}>
          <Card
            style={{ flexDirection: "column", margin:0 }}
            image="/assets/posts/layout-frame-1.png"
            title="Pista Comum"
            text="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."
          />
          <Card
            style={{ flexDirection: "column", margin: `4rem 0` }}
            image="/assets/posts/layout-frame-2.png"
            title="Pista Premium"
            text="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."
          />
          <Card
            style={{ flexDirection: "column", margin:0 }}
            image="/assets/posts/layout-frame-3.png"
            title="Cadeiras"
            text="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
          />
        </div>
      </section>
    </>
  );
}
