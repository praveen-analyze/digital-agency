"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 text-zinc-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Design Agency
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="/" className="cursor-pointer hover:text-emerald-400 transition block">Home</a>
          </li>

          <li>
            <a href="/#services" className="cursor-pointer hover:text-emerald-400 transition block">Services</a>
          </li>

          <li>
            <a href="/#portfolio" className="cursor-pointer hover:text-emerald-400 transition block">Portfolio</a>
          </li>

          <li>
            <a href="/#contact" className="cursor-pointer hover:text-emerald-400 transition block">Contact</a>
          </li>
        </ul>

        {/* Hire Button */}
        <a href="/#contact" className="hidden md:block bg-emerald-500 text-zinc-950 font-semibold px-5 py-2 rounded-lg hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
          Hire Us
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <ul className="flex flex-col items-center gap-6 py-8">
            <li className="w-full text-center">
              <a href="/" onClick={() => setMenuOpen(false)} className="block w-full text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Home</a>
            </li>
            <li className="w-full text-center">
              <a href="/#services" onClick={() => setMenuOpen(false)} className="block w-full text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Services</a>
            </li>
            <li className="w-full text-center">
              <a href="/#portfolio" onClick={() => setMenuOpen(false)} className="block w-full text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Portfolio</a>
            </li>
            <li className="w-full text-center">
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="block w-full text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Contact</a>
            </li>

            <a href="/#contact" onClick={() => setMenuOpen(false)} className="bg-emerald-500 text-zinc-950 font-bold px-8 py-3 mt-2 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-colors">
              Hire Us
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;