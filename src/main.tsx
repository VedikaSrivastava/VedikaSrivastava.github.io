import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initClarity } from './analytics/clarity.ts';
import Layout from './Layout.tsx';
import './styles/global.css';

initClarity();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);
