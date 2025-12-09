import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Helper to extract Google Drive ID - Matches /file/d/ID, id=ID, open?id=ID
  const getGoogleDriveId = (url: string) => {
    if (!url) return null;
    const regExp = /(?:file\/d\/|id=|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl mb-16 text-center">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold mb-4"
        >
          Client Opinions
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-zinc-400"
        >
          Don't just take my word for it.
        </motion.p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => {
              const driveId = getGoogleDriveId(item.avatar);
              const avatarSrc = driveId 
                ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w200` 
                : item.avatar;

              return (
                <div 
                  key={`${item.id}-${idx}`} 
                  className="flex-shrink-0 w-[400px] bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative"
                >
                  <Quote className="absolute top-6 right-6 text-primary-900 w-10 h-10 opacity-50" />
                  <p className="text-zinc-300 text-lg leading-relaxed mb-6 relative z-10">
                    "{item.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={avatarSrc} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full border border-zinc-700 object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.name) + '&background=random';
                      }}
                    />
                    <div>
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-sm text-zinc-500">{item.role}, {item.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;