import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, Globe, GraduationCap, Clock, Users, BookOpen, Zap } from 'lucide-react';

const StudyOptionsSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Your Study Options at INTERLINK
        </motion.h2>
        
        {/* Two-column comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* In-Person Program Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#064088] text-white p-6">
              <h3 className="text-2xl font-bold mb-2">In-Person Program</h3>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#064088] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#064088] mb-1">Location:</h4>
                  <p className="text-gray-700">On Campus at University of North Carolina Greensboro</p>
                  <p className="text-gray-700">Greensboro, North Carolina, USA</p>
                </div>
              </div>
              
              {/* Duration */}
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-[#064088] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#064088] mb-1">Duration:</h4>
                  <p className="text-gray-700">10 weeks per level (two 5-week terms)</p>
                </div>
              </div>
              
              {/* Tuition */}
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 text-[#064088] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#064088] mb-1">Tuition:</h4>
                  <p className="text-gray-700">$1,650 per term</p>
                  <p className="text-gray-600 text-sm italic">Note: F-1 visa students must study full-time.</p>
                </div>
              </div>
              
              {/* Cultural Immersion */}
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-[#064088] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#064088] mb-1">Cultural Immersion:</h4>
                  <p className="text-gray-700">Live, study, and interact with students from the USA and around the world</p>
                </div>
              </div>
              
              {/* University Admission */}
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#064088] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#064088] mb-1">University Admission:</h4>
                  <p className="text-gray-700">Admission without TOEFL/IELTS upon program completion</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Online Program Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#3a6ea5] text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Online Program</h3>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Duration */}
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-[#3a6ea5] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3a6ea5] mb-1">Duration:</h4>
                  <p className="text-gray-700">10 weeks per level (two 5-week terms)</p>
                </div>
              </div>
              
              {/* Full-time Tuition */}
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 text-[#3a6ea5] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3a6ea5] mb-1">Full-time Tuition:</h4>
                  <p className="text-gray-700">$1,650 per term</p>
                  <p className="text-gray-600 text-sm">(2 classes per day)</p>
                </div>
              </div>
              
              {/* Part-time Tuition */}
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#3a6ea5] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3a6ea5] mb-1">Part-time Tuition:</h4>
                  <p className="text-gray-700">$825 per term</p>
                  <p className="text-gray-600 text-sm">(1 class per day)</p>
                </div>
              </div>
              
              {/* Curriculum */}
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-[#3a6ea5] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3a6ea5] mb-1">Curriculum:</h4>
                  <p className="text-gray-700">Same interactive curriculum as the in-person program</p>
                </div>
              </div>
              
              {/* Flexibility */}
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-[#3a6ea5] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3a6ea5] mb-1">Flexibility:</h4>
                  <p className="text-gray-700">Start your English studies from home while applying for your visa</p>
                  <p className="text-gray-600 text-sm italic">(Note: Classes are live and scheduled – not asynchronous.)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Information - Keeping this but updating the content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-[#064088] mb-4">Not Sure Which Program Is Right for You?</h3>
          <p className="text-gray-700 mb-6">
            Our advisors can help you choose the perfect program based on your goals, budget, and timeline. We offer personalized guidance to ensure you get the most out of your English learning experience.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#064088] hover:bg-[#053067] text-white font-bold rounded-lg transition-colors shadow-sm">
              Get Free Program Advice
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
