import React from 'react'

import styles from './BubbleButton.module.scss';

export default function BubbleButton(props) {
  return (
    <button
      className={styles.BubbleButton}
      onClick={props.onClick}>
        {props.text}
    </button>
  )
}
