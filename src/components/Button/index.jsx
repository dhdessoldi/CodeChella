import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({link , children}) {
  return (
    <Link to={link}>
      <button className={styles.button}>{children}</button>
    </Link>
  )
}
