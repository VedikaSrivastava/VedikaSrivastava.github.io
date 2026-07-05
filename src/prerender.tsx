import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './Layout.tsx';
import './styles/global.css';

function normalizePrerenderedHtml(html: string) {
  return html
    .replace(/<link rel="preload" as="image" href="[^"]*">/g, '')
    .replace(/file:[^"]*?\/assets\//g, './assets/');
}

export async function prerender() {
  const html = normalizePrerenderedHtml(
    renderToString(
      <StrictMode>
        <Layout />
      </StrictMode>,
    ),
  );

  return { html };
}
