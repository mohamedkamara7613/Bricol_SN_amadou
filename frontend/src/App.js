import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkerSearchMap from "./components/WorkerSearchMap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkerSearchMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;