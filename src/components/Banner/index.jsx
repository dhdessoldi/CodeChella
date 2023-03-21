import React from "react";
import styles from "./Banner.module.css";

export default function Banner({ image, title }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('/assets/banners/banner-${image}.png')` }}
    >
      <h1>{title}</h1>
    </div>
  );
}
