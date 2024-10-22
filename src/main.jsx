import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BasicLogViewer from './LogViwer.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="split-screen">
      <div className="left-pane">
        <App />
      </div>
      <div className="right-pane">
        <BasicLogViewer /> 
      </div>
    </div>
  </StrictMode>,
);
