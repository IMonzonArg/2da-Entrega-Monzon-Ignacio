import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
