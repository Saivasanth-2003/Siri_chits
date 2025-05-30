import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ScreenTwo.module.scss';
import liscence from '../../Assets/Images/liscence.png';
const ScreenTwo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.liscence}>
      <h1>Licensed & Trusted</h1>
      <p>
        Siri chits is fully registered and operates under legal financial guidelines. Your security and trust are our priorities.
      </p>
      <img src={liscence} alt="License" loading="lazy" />
      <button className={styles.nextbutton} onClick={() => navigate('/screen3')}>→</button>
    </div>
  );
};

export default ScreenTwo;