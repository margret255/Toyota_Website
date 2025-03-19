import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Used from "./components/Used";


function App() {
  return (
    <div>
      <Navbar /> {}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Default page */}
       
     
         
        <Route path="/used-cars" element={<Used />} />
       
      </Routes>
    </div>
  );
}

export default App;
