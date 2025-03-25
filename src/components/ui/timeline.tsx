import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  duration: string;
  icon: string;
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  duration, 
  icon, 
  children 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex mb-12 last:mb-0"
    >
      {/* Timeline Line and Icon */}
      <div className="relative flex flex-col items-center mr-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#064088] text-white text-xl z-10">
          {icon}
        </div>
        
        {/* Vertical Line */}
        <div className="absolute top-12 h-full w-0.5 bg-gray-200 -z-10"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center mb-2">
          <h3 className="text-xl font-bold text-[#064088]">{title}</h3>
          <span className="md:ml-4 text-sm font-medium text-[#dc5d33] bg-orange-50 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {children}
    </div>
  );
};
