import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/login_page/login_page";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;