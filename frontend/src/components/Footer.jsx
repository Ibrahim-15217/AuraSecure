import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-10 text-center border-t border-slate-700">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">AuraSecure</span>. 
        All Rights Reserved.
      </p>
      <p className="text-xs mt-2">Built with ❤️ using React, TailwindCSS, and Hardhat</p>
    </footer>
  );
};

export default Footer;
