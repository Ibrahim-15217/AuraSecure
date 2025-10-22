import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Cpu,
  ArrowDown,
  Upload,
  Database,
  Eye,
  CheckCircle,
  FileSearch,
} from "lucide-react";

const Home = () => {
  return (
    <div className="text-center bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="flex justify-center mb-6"
          >
            <ShieldCheck className="w-20 h-20 text-blue-500 dark:text-teal-400 drop-shadow-lg" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-400 to-green-400 bg-clip-text text-transparent mb-4">
            AuraSecure
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Redefining Secure Data Transfer with Blockchain + DAG Architecture.  
            Your data. Your control. Absolute security.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
            >
              Launch App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-xl transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-gray-500 dark:text-gray-400"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Lock className="w-10 h-10 text-blue-500 dark:text-teal-400" />,
              title: "End-to-End Encryption",
              text: "All data is encrypted before transfer, ensuring absolute confidentiality.",
            },
            {
              icon: <KeyRound className="w-10 h-10 text-blue-500 dark:text-teal-400" />,
              title: "Access Control",
              text: "Only private key owners or approved wallets can access stored information.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-blue-500 dark:text-teal-400" />,
              title: "Powered by BlockDAG",
              text: "Leveraging scalable DAG-based consensus for secure and fast transactions.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <h2 className="text-3xl font-bold mb-12">How AuraSecure Works</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          {[
            { icon: <Upload />, title: "Upload", text: "User uploads sensitive data securely." },
            { icon: <Lock />, title: "Encrypt", text: "Data is hashed and encrypted locally." },
            { icon: <Database />, title: "Store", text: "Stored on-chain using smart contract." },
            { icon: <Eye />, title: "Access", text: "Only authorized wallets can decrypt." },
            { icon: <CheckCircle />, title: "Verify", text: "Data integrity verified via hash." },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-4 text-blue-500 dark:text-teal-400">
                {step.icon}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Healthcare",
              text: "Allow doctors to access emergency medical records securely.",
            },
            {
              title: "Education",
              text: "Protect student credentials and certificates from tampering.",
            },
            {
              title: "Government",
              text: "Enable verified, private data sharing between agencies.",
            },
          ].map((use, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
            >
              <FileSearch className="w-10 h-10 mx-auto mb-4 text-blue-500 dark:text-teal-400" />
              <h3 className="text-xl font-semibold mb-2">{use.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{use.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Secure Your Data?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-700 font-semibold px-10 py-3 rounded-xl shadow-lg hover:shadow-2xl transition"
        >
          Get Started Now
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
