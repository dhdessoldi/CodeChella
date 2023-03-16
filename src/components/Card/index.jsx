import React from 'react'
import styles from './Card.module.css'

export default function Card({image, title, text}) {
  return (
    <div className={styles.container}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}
