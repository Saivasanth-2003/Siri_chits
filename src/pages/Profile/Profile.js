import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profileImage: null,
  });

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/auth/users/profile/${userId}`);
        console.log('fetched user data:',data);
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      } catch (error) {
        if (error.response) {
          console.error('Error fetching profile:', error.response.data.error);
        } else {
          console.error('Error fetching profile:', error.message);
        }
        setUser({ error: 'Failed to fetch profile' }); // avoid infinite Loading...
      }
    };
    fetchProfile();
  }, [userId]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage') {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = new FormData();
    updatedFormData.append('name', formData.name);
    updatedFormData.append('email', formData.email);
    updatedFormData.append('phone', formData.phone);
    if (formData.profileImage) {
      updatedFormData.append('profileImage', formData.profileImage);
    }

    try {
      const { data } = await axios.put(`http://localhost:5000/auth/users/profile/${userId}`, updatedFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUser(data);
      setEditing(false);
    } catch (error) {
      if (error.response) {
        console.error('Error updating profile:', error.response.data.error);
      } else {
        console.error('Error updating profile:', error.message);
      }
    }
  };

  if (!user) return <p>Loading...</p>;
  if (user.error) return <p>Error: {user.error}</p>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img
        src={user.profileImage ? `/uploads/${user.profileImage}` : '/default-avatar.png'}
        alt="Profile"
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      {!editing ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          /><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          /><br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          /><br />
          <input
            type="file"
            name="profileImage"
            onChange={handleInputChange}
          /><br />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Profile
