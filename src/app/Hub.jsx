import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import '../styles/Hub.css';

function Hub() {
  return (

    
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
      
      <Route path="/HomePage" element={<HomePage />} />

      <Route path="/MainPage" element={<MainPage/>} />

    </Routes>
  
   
  );
}

export default Hub;