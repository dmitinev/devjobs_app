import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from '../src/context/themeContext/ThemeContext.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
