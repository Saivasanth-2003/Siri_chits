import React from 'react'
import analysis from '../../Assets/Images/analysis.jpg';
import styles from './Features.module.scss'
import { useNavigate } from 'react-router-dom';
function Analysis() {
    const navigate= useNavigate();
  return (
    <div className={styles.container}>
          <img src={analysis} alt="SampleImage" loading="lazy" className={styles.image} />
          <h1 className={styles.heading}>Real time Bidding-Real time Security</h1>
          <p className={styles.description}>Only verified members can join the bidding circle.</p>
          <button onClick={()=>navigate('/signup')} className={styles.nextbutton}>Next</button>
    </div>
  )
}

export default Analysis