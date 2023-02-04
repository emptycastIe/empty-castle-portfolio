import React from 'react'

import Info from './bio/Info.jsx';
import HomeImg from './HomeImg';
import './Home.css';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid grid--column--2">
        <Info />

        <HomeImg />
      </div>
    </section>
  );
};

export default Home;