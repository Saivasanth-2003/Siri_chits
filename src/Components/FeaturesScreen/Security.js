import React from 'react'
import styles from './Features.module.scss';
import security from '../../Assets/Images/Security.jpg'
import { useNavigate } from 'react-router-dom';
function Security() {
  const navigate = useNavigate();
  return (
   
<div className={styles.container}>
  <img src={security} alt="SampleImage" loading="lazy" className={styles.image} />
  <h1 className={styles.heading}>Your Money our responsibility</h1>
  <p className={styles.description}>protecting your chit every bit.</p>
  <button className={styles.nextbutton}  onClick={()=>navigate("/feature/bidding")}>Next</button>
    </div>
    
  )
}

export default Security