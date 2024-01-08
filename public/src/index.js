import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

const node = document.getElementById('root');
const root = createRoot(node);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);