"use client";

import { motion } from "framer-motion";
import { UserPlus, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-0" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'><path fill='%23ffffff' d='M0 300L50 325L100 300L150 275L200 300L250 325L300 300L350 275L400 300L450 325L500 300L550 275L600 300L650 325L700 300L750 275L800 300L850 325L900 300L950 275L1000 300L1050 325L1100 300L1150 275L1200 300V600H0V300Z'/></svg>")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-accent-gold text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Admissions Open for 2026-27
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Welcome to <br />
            <span className="text-accent-gold">Greenwood High</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Where Excellence Meets Opportunity. We nurture young minds to become tomorrow's leaders through innovative education and character development.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="#admissions"
              className="bg-accent-gold text-primary hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-accent-gold/20 group"
            >
              <UserPlus size={20} />
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Info size={20} />
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-1">98%</div>
              <div className="text-white/60 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-1">80+</div>
              <div className="text-white/60 text-sm">Expert Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-1">1.2k+</div>
              <div className="text-white/60 text-sm">Students</div>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-float">
            <img
              src="/images/hero.png"
              alt="Students Learning"
              className="w-full h-auto"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-30 blur-3xl" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/40 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
