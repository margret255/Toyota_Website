import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import "../styles/Services.css";


const ServicesLayout = () => {
  return (
    <div>
      <ServiceNavbar />
      <Outlet /> 
    </div>
  );
};

const Services = () => {
  return (
    <Routes>
      <Route element={<ServicesLayout />}>
        {/* These routes will be nested inside ServicesLayout */}
        <Route index element={<ServicesHome />} />
        <Route path="/home" element={<ServicesHome />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default Services;