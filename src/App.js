import React from 'react'

import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';

import styles from './App.module.scss';

import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

export default function App() {
  // STATES
  const user = {
    username: "@elonmusk",
    name: "Elon Musk",
    verified: true,
    pic: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
  }

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}