import React from 'react'
import styles from './Card.module.css'

export default function Card({image, title, text, style}) {
  return (
    <div className={styles.container} style={style}>
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}
