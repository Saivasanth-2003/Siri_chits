import React from 'react';
import styles from './Features.module.scss'
import bidding from '../../Assets/Images/bidding.jpg'
import { useNavigate } from 'react-router-dom';

function Bidding() {    
    const navigate= useNavigate();
  return (
    <div className={styles.container}>
      <img src={bidding} alt="SampleImage" loading="lazy" className={styles.image} />
      <h1 className={styles.heading}>Real time Bidding-Real time Security</h1>
      <p className={styles.description}>Only verified members can join the bidding circle.</p>
      <button className={styles.nextbutton}  onClick={()=>navigate('/feature/notification')}>Next</button>
        </div>
  )
}

export default Bidding;