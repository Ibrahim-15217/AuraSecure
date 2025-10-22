import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const connectWallet = () => console.log("Connecting wallet...");
  const disconnectWallet = () => console.log("Disconnecting wallet...");
  const account = null; // placeholder

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <Navbar
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          account={account}
        />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
