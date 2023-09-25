import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import { MentorPage } from '../Pages/MentorPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mentor" element={<MentorPage />} />
    </Routes>
  )
}

export default AllRoutes;
