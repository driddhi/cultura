"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Kathak", query: "kathak dance" },
  { name: "Folk Dance", query: "indian folk dance" },
  { name: "Rabindra Nritya", query: "rabindra nritya dance" },
  { name: "Odissi", query: "odissi classical dance" },
  { name: "Bharatanatyam", query: "bharatanatyam dance" },
  { name: "Mohiniyattam", query: "mohiniyattam dance" },
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-rose-50 to-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8 text-center text-rose-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Cultura
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover the beauty of Indian classical & folk dance forms ✨
      </motion.p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/video/${encodeURIComponent(cat.query)}`}>
              <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg cursor-pointer transition">
                <h2 className="text-xl font-semibold text-rose-800">{cat.name}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
