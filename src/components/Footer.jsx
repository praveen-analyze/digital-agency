"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 text-zinc-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Design Agency
            </h1>

            <p className="text-gray-400 mt-4">
              Creating modern digital experiences for startups
              and businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-emerald-400 transition-colors cursor-pointer block">Home</a></li>
              <li><a href="/#services" className="hover:text-emerald-400 transition-colors cursor-pointer block">Services</a></li>
              <li><a href="/#portfolio" className="hover:text-emerald-400 transition-colors cursor-pointer block">Portfolio</a></li>
              <li><a href="/#contact" className="hover:text-emerald-400 transition-colors cursor-pointer block">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Services
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Follow Us
            </h2>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="hover:text-emerald-400 cursor-pointer transition" />

              <FaLinkedin className="hover:text-emerald-400 cursor-pointer transition" />

              <FaInstagram className="hover:text-emerald-400 cursor-pointer transition" />

              <FaTwitter className="hover:text-emerald-400 cursor-pointer transition" />

            </div>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Design Agency. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;