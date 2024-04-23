import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import UserInfo from './composants/UserInfo';
function AppRouter() {
  return(
      <Router>
      
          <Routes>
              <Route path='/' element={<UserInfo/>}/>
          </Routes> 
      </Router>
  )
  }   

  export default AppRouter;