import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import { MentorPage } from "../Pages/MentorPage";
import Appointments from "../Pages/Appointments";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/mentor"
        element={
          <PrivateRoute>
            <MentorPage />
          </PrivateRoute>
        }
      />
      <Route path="/appointment" element={<PrivateRoute>
        <Appointments />
      </PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;
