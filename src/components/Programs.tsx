"use client";

import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Globe, Check } from "lucide-react";

const programs = [
  {
    title: "STEM Excellence",
    description: "Advanced science, technology, engineering, and mathematics programs with hands-on learning.",
    icon: FlaskConical,
    items: ["Robotics & Coding", "Advanced Science Labs", "Math Competitions", "Engineering Projects"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Arts & Humanities",
    description: "Comprehensive arts program fostering creativity and cultural appreciation.",
    icon: BookOpen,
    items: ["Visual & Performing Arts", "Music & Theater", "Creative Writing", "Cultural Studies"],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Global Studies",
    description: "International programs preparing students for global citizenship.",
    icon: Globe,
    items: ["Foreign Languages", "Exchange Programs", "International Baccalaureate", "Cultural Exchange"],
    color: "from-emerald-500 to-teal-400"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-secondary uppercase tracking-widest mb-4"
          >
            Academic Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            Our Academic Programs
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-6 text-lg"
          >
            Comprehensive programs designed to challenge and inspire students at every level of their educational journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-premium hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                <program.icon size={32} />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-4">{program.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              <ul className="space-y-3">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="mt-10 w-full py-3 rounded-xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all">
                View Curriculum
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
