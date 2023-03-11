import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';

const Nav = () => {
  const { openModal } = useContext(appContext);

  //   console.log(data);
  return (
    <nav className='nav p-2'>
      <h1>Contact List</h1>
      <button onClick={() => openModal()} className='btn'>
        Add Contact
      </button>
    </nav>
  );
};

export default Nav;
