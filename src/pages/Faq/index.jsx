import Banner from 'components/Banner'
import React from 'react'
import styles from './Faq.module.css'

export default function Faq() {
  return (
    <>
              <Banner image="faqs" title="Informações Gerais" />
              <section className={styles.container}>
                <h1>Ops, esta página ainda está em construção! Volte mais tarde!</h1>
              </section>
    </>
  )
}
