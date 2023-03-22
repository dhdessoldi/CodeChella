import React from 'react'
import styles from './Button.module.css'

export default function Button({text}) {
  return (
      <button className={styles.button}>
              <p className={styles.button__text}>{text}</p>
              <img className={styles.button__image} src="/assets/icons/ticket.svg" alt="" />
        </button>
  )
}
