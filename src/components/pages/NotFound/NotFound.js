import React from 'react'

import { useNavigate  } from "react-router-dom";

import styles from './NotFound.module.scss';

import BubbleButton from '../../atoms/BubbleButton/BubbleButton';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.NotFound}>
      <div className={styles.NotFound_Center}>
        <p className={styles.NotFound_Center__Text}>Hmm...this page doesn’t exist. Try searching for something else.</p>
        <div className={styles.NotFound_Center__Button}>
          <BubbleButton text="Search" onClick={() => navigate('/explore')} />
        </div>
      </div>
    </div>
  )
}
