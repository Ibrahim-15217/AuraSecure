import React from "react";
import { motion } from "framer-motion";
import { Upload, ShieldCheck, Lock, Key } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        AuraSecure Dashboard
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {[
          { icon: Upload, title: "Upload Data", desc: "Securely store and hash your data on-chain." },
          { icon: ShieldCheck, title: "Verify Integrity", desc: "Validate file authenticity using blockchain proofs." },
          { icon: Lock, title: "Grant Access", desc: "Allow trusted users to access encrypted data." },
          { icon: Key, title: "Revoke Access", desc: "Easily remove access permissions anytime." },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
