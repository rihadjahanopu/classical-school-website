"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Mail, ExternalLink } from "lucide-react";

const faculty = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Department Head - English",
    bio: "Ph.D. in English Literature with 20+ years of experience in academia and curriculum development.",
    image: "/images/teacher-1.png",
  },
  {
    name: "Robert Chen, M.S.",
    role: "Mathematics Department",
    bio: "Specializes in advanced mathematics and coaching state-level championship math teams.",
    image: "/images/teacher-2.jpg",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Science Department",
    bio: "Environmental scientist with expertise in molecular biology and sustainable research practices.",
    image: "/images/teacher-3.webp",
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-secondary uppercase tracking-widest mb-4"
            >
              Our Mentors
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
            >
              Meet Our Exceptional Faculty
            </motion.h3>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
          >
            View All Faculty <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-primary/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-gold hover:text-primary transition-all">
                      <FaLinkedinIn size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-gold hover:text-primary transition-all">
                      <FaTwitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-gold hover:text-primary transition-all">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h5 className="text-xl font-bold text-primary mb-1">{member.name}</h5>
                <p className="text-secondary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <button className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View Full Profile <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default Faculty;
