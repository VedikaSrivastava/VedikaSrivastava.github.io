import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initClarity } from './analytics/clarity.ts';
import Layout from './Layout.tsx';
import './styles/global.css';

const scheduleClarity = () => void initClarity();

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(scheduleClarity, { timeout: 3000 });
} else {
  globalThis.setTimeout(scheduleClarity, 1500);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);
