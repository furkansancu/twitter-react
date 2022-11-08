import React from 'react'

import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';

import styles from './App.module.scss';

import Home from './components/pages/Home/Home';
import Explore from './components/pages/Explore/Explore';
import NotFound from './components/pages/NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}