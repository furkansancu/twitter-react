import React from 'react'

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Home_Container}>
        <header className={styles.Home_Header}>header</header>
        <main className={styles.Home_Main}>
          <div className={styles.Home_Main__Feed}>feed</div>
          <div className={styles.Home_Main__Sidebar}>sidebar</div>
        </main>
      </div>
    </div>
  )
}