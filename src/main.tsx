
import React from 'react';
import { createRoot } from 'react-dom/client';
import Notification from './components/Notification';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);