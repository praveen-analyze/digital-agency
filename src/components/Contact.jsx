"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      router.push("/success");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section
      id="contact"
      className="bg-zinc-950 text-zinc-100 py-20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-emerald-400 uppercase font-semibold tracking-widest">
            Contact Us
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            Let's Build Something Amazing
          </h1>

          <p className="text-gray-400 mt-5">
            Have a project in mind? We'd love to hear from you.
            Fill out the form below and we'll get back to you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6 relative z-10"
        >

          <div>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-4 rounded-lg bg-zinc-900/80 backdrop-blur-sm border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 outline-none focus:ring-1 focus:ring-emerald-500 transition-all`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-4 rounded-lg bg-zinc-900/80 backdrop-blur-sm border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 outline-none focus:ring-1 focus:ring-emerald-500 transition-all`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-4 rounded-lg bg-zinc-900/80 backdrop-blur-sm border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 px-8 py-3 rounded-lg transition shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;