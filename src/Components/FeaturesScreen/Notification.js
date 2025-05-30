import React from 'react'
import styles from './Features.module.scss';
import notification from '../../Assets/Images/pushnotifications.jpg'
import { useNavigate } from 'react-router-dom';
function Notification() {
     const navigate= useNavigate();
  return (
     <div className={styles.container}>
          <img src={notification} alt="SampleImage" loading="lazy" className={styles.image} />
          <h1 className={styles.heading}>Real time Bidding-Real time Security</h1>
          <p className={styles.description}>Only verified members can join the bidding circle.</p>
          <button className={styles.nextbutton} onClick={()=>navigate('/feature/tracking')}>Next</button>
    </div>
  )
}

export default Notification