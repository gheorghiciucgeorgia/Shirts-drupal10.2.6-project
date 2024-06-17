import React from 'react';
import { createRoot } from 'react-dom/client';

// Folosește createRoot pentru a monta aplicația ta React
const root = createRoot(document.getElementById('react-app'));

// Exemplu simplu: afișează un mesaj "Hello, World"
root.render(
  <h1>Hello there - world!</h1>
);
