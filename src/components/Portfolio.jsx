"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Creative Landing Page",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Business Website",
    category: "Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Agency Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Restaurant Website",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-zinc-900 text-zinc-100 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 uppercase font-semibold tracking-widest">
            Portfolio
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            Our Recent Projects
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of our latest creative projects designed for businesses
            around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-emerald-300 mt-2 font-medium">
                  {project.category}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;