import React, { useContext, useState } from 'react';
import { createUser } from '../api/userApi';
import { appContext } from '../context/AppContext';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: ''
  });

  const { addUser, closeModal } = useContext(appContext);

  const { email, name, age } = formData;

  const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((email, name, age)) {
      const data = await createUser({ email, name, age: parseInt(age) });
      addUser(data);
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type='text'
          value={name}
          name='name'
          placeholder='Enter Name'
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email
        <input
          type='email'
          value={email}
          placeholder='Enter Email'
          name='email'
          onChange={handleInputChange}
        />
      </label>
      <label>
        age
        <input
          type='number'
          value={age}
          name='age'
          placeholder='Enter age'
          onChange={handleInputChange}
        />
      </label>
      <button type='submit' className='btn'>
        Create user
      </button>
    </form>
  );
};

export default UserForm;
