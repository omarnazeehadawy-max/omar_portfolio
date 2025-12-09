import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  // Helper to extract Google Drive ID if the user pastes a raw link
  const getGoogleDriveId = (url: string) => {
    if (!url) return null;
    const regExp = /\/file\/d\/([a-zA-Z0-9_-]+)|id=([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? (match[1] || match[2]) : null;
  };

  // Determine the correct image source
  const driveId = getGoogleDriveId(PERSONAL_INFO.heroImage);
  const heroImageSrc = driveId 
    ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000` 
    : PERSONAL_INFO.heroImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-800 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-primary-950 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-primary-500 font-medium tracking-widest text-sm uppercase mb-4">
              Hello, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500">
              {PERSONAL_INFO.name}
            </h1>
            <h3 className="text-2xl text-white font-medium mb-4">{PERSONAL_INFO.role}</h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.introduction}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center lg:justify-start"
          >
             <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {PERSONAL_INFO.availabilityStatus}
             </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 to-primary-600 rounded-[2rem] rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-white/10"></div>
            <img 
              src={heroImageSrc} 
              alt={PERSONAL_INFO.name} 
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-zinc-600 animate-bounce w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;