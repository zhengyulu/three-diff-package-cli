import React from 'react';
import Styles from './home.module.scss';
import homepagePic from '../../assets/homepage.jpg';

function Home(): JSX.Element {

  return (
    <div className={Styles.pageContainer}>
      <img src={homepagePic} alt="home" />
    </div>
  );
}

export default Home;
