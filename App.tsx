import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import OrderPage from './components/OrderPage';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from './constants';

function App() {
  // Simple state-based routing for a single-page feel
  const [view, setView] = useState<'home' | 'order'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-primary-900 selection:text-white">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <Hero />
              <Portfolio />
              <Testimonials />
              
              {/* Call to Action Section */}
              <section className="py-24 px-6 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                      Ready to create something <span className="text-primary-600">extraordinary?</span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                      Let's collaborate to bring your vision to life with precision and style.
                    </p>
                    
                    <button 
                      onClick={() => setView('order')}
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                       <span className="relative z-10 flex items-center gap-2">
                         Start a Project
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </span>
                       <div className="absolute inset-0 bg-primary-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* Footer */}
              <footer className="py-8 bg-black border-t border-zinc-900 text-center text-zinc-600 text-sm">
                <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
              </footer>
            </main>
          </motion.div>
        ) : (
          <OrderPage key="order" onBack={() => setView('home')} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
