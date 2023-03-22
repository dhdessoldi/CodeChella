import React from 'react'
import styles from './Lineup.module.css'

export default function Lineup({lineup, mainEvent, date}) {


  return (
    <section className={styles.container}>
        <h2 className={styles.container__date}>{date}</h2>
        <p className={styles.container__main}>{mainEvent}</p>
        <ul className={styles.container__list}>
            {lineup.map((band)=>
                <li key={band.name} style={{fontSize:`${band.fontSize}`, fontWeight:`${band.fontWeight}`}}>{band.name}</li>
            )}
        </ul>
    </section>
  )
}
