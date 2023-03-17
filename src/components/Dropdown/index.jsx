import React from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ label, value, onChange }) {
  const items = [
    {
      place: "Pista comum",
      date: "11/03",
    },
    {
      place: "Pista premium",
      date: "11/03",
    },
    {
      place: "Cadeiras térreo",
      date: "11/03",
    },
    {
      place: "Cadeiras superiores",
      date: "11/03",
    },

    {
      place: "Pista comum",
      date: "12/03",
    },
    {
      place: "Pista premium",
      date: "12/03",
    },
    {
      place: "Cadeiras térreo",
      date: "12/03",
    },
    {
      place: "Cadeiras superiores",
      date: "12/03",
    },
  ];

  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <select
        required
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
      >
        <option />
        {items.map((item) => (
          <option key={item}>{item.place} - {item.date}</option>
        ))}
      </select>
    </div>
  );
}
