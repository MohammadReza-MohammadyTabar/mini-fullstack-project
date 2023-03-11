import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { appContext } from '../context/AppContext';
import UserForm from './UserForm';

const Modal = () => {
  const { closeModal } = useContext(appContext);

  return createPortal(
    <div className='modal'>
      <div>
        <UserForm />
      </div>
      <button onClick={() => closeModal()}>Close</button>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
