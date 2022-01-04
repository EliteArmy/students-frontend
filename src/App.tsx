import React from 'react';

import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';
import Dashboard from './components/dashboard/dashboard.component';
import Register from './components/register/register.component';
import Update from './components/update/update.component';

import './App.css';

function App() {
  return (
    <div>
      <CssBaseline />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="new" element={<Register />} />
          <Route path="edit/:studentId" element={<Update />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
