import React from 'react';
import styles from './ScreenOne.module.scss';
import { useNavigate } from 'react-router-dom';
import Sirichits from '../../Assets/Images/Sirichits.png';

const ScreenOne = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.onboard}>
      <img src={Sirichits} alt="Welcome"  loading='lazy'/>
      <h1>Welcome to Siri Chit Fund</h1>
      <p>
        A chit fund is a traditional savings scheme where members pool money monthly and access it when needed — combining savings and borrowing in one platform.
      </p>
      <button className={styles.nextbutton} onClick={() => navigate('/screen2')}>Let's Start</button>
    </div>
  );
};

export default ScreenOne;