import React from "react";
import Demo from "./pages/Demo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
};

export default App;
