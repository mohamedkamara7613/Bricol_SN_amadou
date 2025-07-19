import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkerSearchMap from "./components/WorkerSearchMap";
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterStep1 from './pages/RegisterStep1';
import RegisterStep2 from './pages/RegisterStep2';
import ServiceChoicePage from './pages/ServiceChoicePage';
import DescribeProblemPage from './pages/DescribeProblemPage';
import DescribeEtatDesLieuxPage from './pages/DescribeEtatDesLieuxPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/step1" element={<RegisterStep1 />} />
            <Route path="/register/step2" element={<RegisterStep2 />} />
            <Route path="/services" element={<ServiceChoicePage />} />
            <Route path="/describe-problem" element={<DescribeProblemPage />} />
            <Route path="/etat-des-lieux" element={<DescribeEtatDesLieuxPage />} />
            <Route path="/search" element={<WorkerSearchMap />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
