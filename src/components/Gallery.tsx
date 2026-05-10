"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const images = [
  {
    src: "/images/campus-1.jpg",
    title: "Modern Campus",
    category: "Facilities",
  },
  {
    src: "/images/campus-2.jpeg",
    title: "Science Labs",
    category: "Academic",
  },
  {
    src: "/images/campus-3.jpg",
    title: "Central Library",
    category: "Facilities",
  },
  {
    src: "/images/campus-4.jpeg",
    title: "Sports Arena",
    category: "Athletics",
  },
  {
    src: "/images/campus-5.jpeg",
    title: "Art Studio",
    category: "Creative",
  },
  {
    src: "/images/campus-6.jpg",
    title: "Auditorium",
    category: "Events",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-secondary uppercase tracking-widest mb-4"
          >
            Visual Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            Experience Our Campus
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImg(image)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group shadow-premium"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Maximize2 size={24} />
                </div>
                <h4 className="text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{image.title}</h4>
                <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button 
              className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center text-white">
                <h4 className="text-2xl font-bold mb-2">{selectedImg.title}</h4>
                <p className="text-white/60">{selectedImg.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
