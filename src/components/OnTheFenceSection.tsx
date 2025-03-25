import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const OnTheFenceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#064088] mb-2">
              Pssst… If You're on the Fence, Read This
            </h2>
            <h3 className="text-xl text-[#3a6ea5] font-medium">
              A Personal Message From the Director of INTERLINK
            </h3>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              {/* Director's Image Placeholder */}
              <div className="w-[150px] h-[150px] bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-[#064088]/20">
                <span className="text-gray-500 text-sm">Director's Photo</span>
              </div>
              
              <p className="text-lg text-gray-700 italic font-medium text-center md:text-left">
                "I know making a decision like this can feel overwhelming—but you're not alone."
              </p>
            </div>
            
            <p className="text-gray-700 mb-6">
              At INTERLINK, we've helped thousands of students just like you. Many of them started with doubts, just like you might have right now.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="text-[#064088] font-bold">💬 Telma</span> worried that her English wasn't good enough. Today, she confidently debates in her university classes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="text-[#064088] font-bold">💬 Jimena</span> wasn't sure if studying in the U.S. was possible for her. Now, she's thriving at her dream university.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="text-[#064088] font-bold">💬 Lina</span> wanted to advance her career but felt stuck. INTERLINK gave her the fluency and confidence she needed.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="text-[#064088] font-bold">💬 Yuna</span> came for English but left with lifelong friendships and opportunities she never imagined.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              <span className="font-bold">➡️ What made the difference?</span> They took the first step.
            </p>
            
            <p className="text-gray-700 mb-8">
              At INTERLINK, we don't just teach English—we support you, guide you, and help you succeed.
            </p>
            
            <div className="flex justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Apply Now – Let's Plan Your Future Together</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
            
            <p className="text-gray-700 mb-2">
              I can't wait to welcome you to INTERLINK and see your success story unfold.
            </p>
            
            <p className="text-right text-gray-700 italic font-medium">
              — Valley Peters, Director of INTERLINK International Institutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnTheFenceSection;
