import React from "react";
import styles from "./Dropdown.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Dropdown({ label, value, onChange }) {
  const items = [
    {
      id: uuidv4(),
      place: "Pista comum",
      date: "11/03 (Sábado)",
    },
    {
      id: uuidv4(),
      place: "Pista premium",
      date: "11/03 (Sábado)",
    },
    {
      id: uuidv4(),
      place: "Cadeiras térreo",
      date: "11/03 (Sábado)",
    },
    {
      id: uuidv4(),
      place: "Cadeiras superiores",
      date: "11/03 (Sábado)",
    },

    {
      id: uuidv4(),
      place: "Pista comum",
      date: "12/03 (Domingo)",
    },
    {
      id: uuidv4(),
      place: "Pista premium",
      date: "12/03 (Domingo)",
    },
    {
      id: uuidv4(),
      place: "Cadeiras térreo",
      date: "12/03 (Domingo)",
    },
    {
      id: uuidv4(),
      place: "Cadeiras superiores",
      date: "12/03 (Domingo)",
    },
  ];

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdown__label}>{label}</label>
      <select className={styles.dropdown__select}
        required
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
      >
        <option />
        {items.map((item) => (
          <option key={item.id}>
            {item.place} - {item.date}
          </option>
        ))}
      </select>
    </div>
  );
}
