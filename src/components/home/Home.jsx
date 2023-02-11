import React from 'react'

import Info from './bio/Info';
import HomeImg from './HomeImg';
import ScrollDown from './ScrollDown';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="home__container container grid">
        <Info />

        <HomeImg />
      </div>

      <ScrollDown />
    </section>
  );
};

export default Home;