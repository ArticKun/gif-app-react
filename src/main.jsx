import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './spinner.css';

// Components
import { GifExpertApp } from './GifExpertApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
