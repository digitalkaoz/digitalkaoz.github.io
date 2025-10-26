import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg/single-page';

import App from './components/App.js';

export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
