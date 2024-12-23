import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
if (root) {
  root.render(<App />);
}
