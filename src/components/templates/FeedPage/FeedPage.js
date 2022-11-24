import React from 'react'

import styles from './FeedPage.module.scss';

import Header from '../../organisms/Header/Header';

export default function FeedPage(props) {
  return (
    <div className={styles.FeedPage}>
      <div className={styles.FeedPage_Container}>
        <header className={styles.FeedPage_Header}>
          <Header user={props.user} />
        </header>
        <main className={styles.FeedPage_Main}>
          <div className={styles.FeedPage_Main__Feed}>{props.children}</div>
          <div className={styles.FeedPage_Main__Sidebar}>sidebar</div>
        </main>
      </div>
    </div>
  )
}