import React from 'react'
import styles from './Features.module.scss';
import tracking from '../../Assets/Images/paymenttrack.jpg'
import { useNavigate } from 'react-router-dom';
function Tracking() {
     const navigate= useNavigate();
  return (
     <div className={styles.container}>
              <img src={tracking} alt="SampleImage" loading="lazy" className={styles.image} />
              <h1 className={styles.heading}>Real time Bidding-Real time Security</h1>
              <p className={styles.description}>Only verified members can join the bidding circle.</p>
              <button className={styles.nextbutton} onClick={()=>navigate('/feature/analysis')}>Next</button>
        </div>
  )
}

export default Tracking