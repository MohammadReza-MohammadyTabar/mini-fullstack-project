import { useContext } from 'react';
import Modal from './components/modal';
import Nav from './components/Nav';
import UserList from './components/UserList';
import { appContext } from './context/AppContext';

const App = () => {
  const { modalOpen } = useContext(appContext);
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='p-2'>
        <UserList />
      </main>

      {modalOpen ? <Modal /> : null}
    </>
  );
};

export default App;
