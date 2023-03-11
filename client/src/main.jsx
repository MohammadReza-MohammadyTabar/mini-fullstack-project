import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

import AppContextProvider from './context/AppContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
