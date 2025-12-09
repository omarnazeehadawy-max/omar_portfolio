import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { OrderFormData } from '../types';

interface OrderPageProps {
  onBack: () => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    businessName: '',
    budget: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = 
`*New Service Inquiry*
----------------
*Name:* ${formData.name}
*Business:* ${formData.businessName || 'N/A'}
*Budget:* ${formData.budget}
*Description:* 
${formData.description}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden"
    >
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>

          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              Start a Project
            </h1>
            <p className="text-zinc-400 text-lg">
              Fill out the details below to initiate a request via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Business Name (Optional)</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Estimated Budget</label>
              <select 
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all appearance-none"
              >
                <option value="" disabled>Select a range</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Project Description</label>
              <textarea 
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                placeholder="Describe your vision, goals, and any specific requirements..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary-700 to-primary-900 hover:from-primary-600 hover:to-primary-800 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary-900/20 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send via WhatsApp</span>
              <Send className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-xs text-zinc-600 mt-4">
              By clicking send, you will be redirected to WhatsApp to send the pre-filled message.
            </p>
          </form>
        </div>
    </motion.div>
  );
};

export default OrderPage;