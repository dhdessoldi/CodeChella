import React from 'react'
import styles from './Card.module.css'

export default function Card({image, title, text, style}) {
  return (
    <div className={styles.container} style={style}>
        <img className={styles.container__image} src={image} alt="" />
        <div>
          <h3 className={styles.container__title}>{title}</h3>
          <p className={styles.container__text}>{text}</p>
        </div>
    </div>
  )
}
