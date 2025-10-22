import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Moon, ShieldCheck } from "lucide-react";

const Navbar = ({ connectWallet, disconnectWallet, account }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm z-50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand logo + name */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          <ShieldCheck className="w-7 h-7 text-blue-500" />
          <span>AuraSecure</span>
        </Link>

        {/* Nav links and controls */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-blue-500 transition">
            Dashboard
          </Link>

          {/* Theme toggle */}
          <motion.button
            whileTap={{ rotate: 180 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:scale-110 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Wallet button */}
          {account ? (
            <button
              onClick={disconnectWallet}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Disconnect
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
