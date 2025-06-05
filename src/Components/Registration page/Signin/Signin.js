import React, { useState } from 'react'
import styles from './Signin.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const navigate =useNavigate();
  const [message, isSetMessage]= useState();
   const [formData, setFormData] = useState({
      
      data:'',
      password: ''

    });

     const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

    const resetForm = () => {
    setFormData({
      data: '',
      password: ''
    });
  };
 
  const handleSubmit= async(e)=>{
    e.preventDefault();
     try {
      const response = await axios.post('http://localhost:5000/auth/users/login', formData);
      if (response.status === 200) {
        isSetMessage(response.data.message || 'login Successful!..');
        navigate('/appscreen')
        resetForm();
    }}catch(error){
         if (error.response) {
        isSetMessage(error.response.data.error || 'login failed!');
      } else {
        console.error('Error:', error);
        isSetMessage('Something went wrong.');
      }
    }
  }
  return (
    <div className={styles.form__container}>
  <div className={styles.content__forms}>
    <h4 style={{ color: "blue", textAlign: "center", fontSize: "18px" }}>{message}</h4>
    <form onSubmit={handleSubmit} className={styles.content__form}>
      <div className={styles.content__inputs}>
        <label>
          <input
            required
            name="data"
            type="text"
            value={formData.data}
            onChange={handleChange}
          />
          <span>Phone number, username, or email</span>
        </label>
        <label>
          <input
            required
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
      </div>
      <button type="submit">Log In</button>
    </form>
    <div className={styles.content__ortext}>
      <span />
      <span>OR</span>
      <span />
    </div>
    <div className={styles.content__forgotbuttons}>
      <button type="button">Forgot password?</button>
    </div>
  </div>
</div>
)
}

export default Signin