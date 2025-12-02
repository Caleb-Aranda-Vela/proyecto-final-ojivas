import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage.jsx';
import './index.css'; // <--- ¡Esta línea importa tus estilos de Tailwind!

// Aquí se 'monta' la aplicación dentro del <div id="root"> del index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
);
