import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './styles/Css/App.css';
import Navbar from './NavBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);
