"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-emerald-400 uppercase tracking-widest font-semibold">
            We Are A Creative Design Agency
          </p>

          <h1 className="text-5xl text-white md:text-7xl font-bold mt-6 leading-tight">
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Modern
            </span>
            <br />
            Digital Experiences
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            We help startups and businesses build beautiful,
            fast, and scalable websites that convert visitors
            into customers.
          </p>

          <div className="flex gap-5 mt-10">
            <a href="/#contact" className="bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 px-7 py-3 rounded-lg transition shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] text-center">
              Get Started
            </a>

            <a href="/#portfolio" className="border text-white border-white/20 px-7 py-3 rounded-lg hover:bg-white/10 transition backdrop-blur-sm text-center">
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;