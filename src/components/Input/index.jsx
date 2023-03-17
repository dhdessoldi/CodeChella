import React from "react";
import styles from './Input.module.css'

export default function Input({label, type, placeholder, onChange, value}) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
        required
        placeholder={placeholder}
      />
    </div>
  );
}
