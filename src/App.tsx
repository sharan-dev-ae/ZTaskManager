import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import { GlobalProvider } from "./context/context";

const App = () => {
  return (
    <GlobalProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task-manager" element={<TaskManager />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
};

export default App;
