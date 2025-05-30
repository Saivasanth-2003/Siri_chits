import React, { useState } from 'react';
import styles from './Signup.module.scss';
import axios from 'axios';
import logo from '../../../Assets/Images/Sirichits.png'
import { useNavigate } from 'react-router-dom';


function Signup() {

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: ''
    });
  };

 const navigate= useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/users/register', formData);
      if (response.status === 201) {
        alert(response.data.message || 'Register Successful!..');
        resetForm();
        navigate("/signin");
    }} catch (error) {
      if (error.response) {
        alert(error.response.data.error || 'Registration failed!');
      } else {
        console.error('Error:', error);
        alert('Something went wrong.');
      }
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" loading='lazy'/>
        </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.title}>Register</p>
        <p className={styles.message}>Signup now and get full access to our app.</p>

        <div className={styles.flex}>
          <label>
            <input
              name="name"
              className={styles.input}
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder
              required
            />
            <span>Name</span>
          </label>
        </div>

        <label>
          <input
            name="email"
            className={styles.input}
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            name="phone"
            className={styles.input}
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder
            required
          />
          <span>Phone</span>
        </label>

        <label>
          <input
            name="password"
            className={styles.input}
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder
            required
          />
          <span>Password</span>
        </label>

        <button type="submit"  className={styles.submit}>Submit</button>
        <p className={styles.signin}>
          Already have an account? <span onClick={()=>navigate('/signin')}>Signin</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
