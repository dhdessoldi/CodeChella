import React from 'react'
import styles from './Lineup.module.css'

export default function Lineup({lineup, mainEvent, date}) {


  return (
    <section className={styles.container}>
        <h2 className={styles.date}>{date}</h2>
        <p>{mainEvent}</p>
        <ul>
            {lineup.map((band)=>
                <li key={band.name} style={{fontSize:`${band.fontSize}`, fontWeight:`${band.fontWeight}`}}>{band.name}</li>
            )}
        </ul>
    </section>
  )
}
