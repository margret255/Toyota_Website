import React from "react";
import Navbar from "./components/Navbar";
import Used from "./components/Used"; 

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Used />  {/* Add Used component here */}
    </div>
  );
}

export default App;
