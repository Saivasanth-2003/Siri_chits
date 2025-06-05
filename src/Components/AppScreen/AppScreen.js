import React, { useState } from 'react'
import styles from './AppScreen.module.scss';
import { CiLogout } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { Outlet } from 'react-router-dom';
function AppScreen() {

    const[title, setNewTitle]=useState('home');

    const handleNavClick=(newtitle)=>{
        setNewTitle(newtitle)
    }

  return (
    <div className={styles.Appinterface}>
        {/* App bar */}
        <div className={styles.Appbar}>
            <h4>{title}</h4>
            <span><CiLogout /></span>
        </div>

        {/* Main Content */}
        <div className={styles.Pages}>
            <Outlet/>
        </div>

        {/* bottom nav bar */}        
        <div className={styles.Appnavbar}>
          <Link to="home"><button className={title === "home" ? styles.active : ""} onClick={()=>handleNavClick("home")}>
                <IoHomeOutline /> 
                 <span>Home</span>
                </button></Link>  
            <Link to="profile"><button className={title === "profile" ? styles.active : ""} onClick={()=>handleNavClick("profile")}>
                <CgProfile />
                 <span>profile</span>
                </button></Link> 
         <Link to="history"><button className={title === "payment" ? styles.active : ""} onClick={()=>handleNavClick("payment")}>
                <MdOutlinePayment />
                 <span>History</span>
                </button></Link>   
            
        </div>
    </div>
  )
}

export default AppScreen

