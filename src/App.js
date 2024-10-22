import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/login_page/login_page";
import Homepage from "./pages/homepage/homepage";
import MealPrep from './pages/meal_prep_page/meal_prep';
import PreBuilds from './pages/pre_builds_page/pre_build_meals';
import BmiCalculator from './pages/calculations_pages/bmi_page/bmi_calculator';
import NutritionsCalculator from './pages/calculations_pages/nutritions_page/nutritions_calculator';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />

          <Route path="/meal_prep" element={<MealPrep />} />
          <Route path="/pre_builds" element={<PreBuilds />} />
          <Route path="/bmi_calculator" element={<BmiCalculator />} />
          <Route path="/nutritions_calculator" element={<NutritionsCalculator />} />
        </Routes>
    </Router>
  );
}

export default App;