"use client";

import { motion } from "framer-motion";
import {
  FaPalette,
  FaLaptopCode,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly interfaces that improve user experience.",
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites built with the latest technologies.",
  },
  {
    id: 3,
    icon: FaBullhorn,
    title: "Branding",
    description:
      "Create a strong brand identity that connects with your audience.",
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Digital Marketing",
    description:
      "Grow your online presence and reach more customers effectively.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-zinc-950 text-zinc-100 py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-emerald-400 text-lg font-semibold uppercase tracking-wider">
            Our Services
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            What We Can Do For You
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide innovative digital solutions that help businesses
            grow with creative design and modern technology.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl shadow-xl text-center hover:border-emerald-500/30 transition-colors relative z-10"
              >
                <Icon className="text-5xl text-emerald-400 mx-auto mb-5 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]" />

                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;