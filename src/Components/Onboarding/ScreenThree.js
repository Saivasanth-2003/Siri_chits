import React from 'react'
import { FaUsers, FaPlusCircle, FaGavel, FaCreditCard, FaBell, FaChartBar } from 'react-icons/fa';
import styles from './ScreenThree.module.scss';
function ScreenThree() {

  const features = [
  {
    icon: <FaUsers />,
    title: 'Join a Chit',
    
  },
  {
    icon: <FaPlusCircle />,
    title: 'Create a Chit',
    
  },
  {
    icon: <FaGavel />,
    title: 'Monthly Bidding',
    
  },
  {
    icon: <FaCreditCard />,
    title: 'Payment Tracking',
    
  },
  {
    icon: <FaBell />,
    title: 'Notifications',
  
  },
  {
    icon: <FaChartBar />,
    title: 'Reports & Insights',
  },
];

  return (
    <div className={styles.featurescreen}>
      <h1>Unless and Enjoy the New feutures</h1>
      <div className={styles.featuregrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featurecard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>

     <a href="/feature/security" target="_self">
  <button className={styles.nextbutton}>Next</button>
</a>
  
    </div>


  );
};

export default ScreenThree