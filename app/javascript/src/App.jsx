import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";

import { setAuthHeaders } from "./apis/axios";
import Dashboard from "./components/Dashboard";
import Public from "./components/Public";

const App = () => {
  useEffect(() => {
    initializeLogger();
    setAuthHeaders();
  }, []);

  return (
    <div>
      <ToastContainer />
      <Public />
      <Dashboard />
    </div>
  );
};

export default App;
