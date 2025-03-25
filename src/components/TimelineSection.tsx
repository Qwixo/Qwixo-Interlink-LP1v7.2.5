import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from './ui/timeline';

const TimelineSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Your Journey Timeline
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From application to graduation, here's what to expect when you study with INTERLINK
          </p>
        </motion.div>
        
        {/* Timeline Component */}
        <Timeline>
          {/* Step 1 */}
          <TimelineItem 
            title="Application & Acceptance" 
            duration="1-2 Weeks"
            icon="📝"
          >
            <p className="text-gray-700">
              Submit your application online, receive your acceptance letter and I-20 form for your visa application.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "The application process was so easy! I got my acceptance letter in just 5 days." - Maria from Brazil
            </div>
          </TimelineItem>
          
          {/* Step 2 */}
          <TimelineItem 
            title="Visa Process" 
            duration="2-4 Weeks"
            icon="🛂"
          >
            <p className="text-gray-700">
              Schedule your visa interview, prepare your documents, and attend your appointment at the U.S. Embassy or Consulate.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "INTERLINK's visa guidance made the process much less stressful." - Ahmed from Saudi Arabia
            </div>
          </TimelineItem>
          
          {/* Step 3 */}
          <TimelineItem 
            title="Pre-Departure Preparation" 
            duration="1-2 Months"
            icon="✈️"
          >
            <p className="text-gray-700">
              Book your flight, arrange housing, and prepare for your journey to the United States.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "The pre-departure checklist was incredibly helpful for planning." - Yuki from Japan
            </div>
          </TimelineItem>
          
          {/* Step 4 */}
          <TimelineItem 
            title="Arrival & Orientation" 
            duration="1 Week"
            icon="🏫"
          >
            <p className="text-gray-700">
              Arrive on campus, attend orientation, take your placement test, and get settled in your new home.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "The airport pickup service and orientation week made me feel welcome right away." - Carlos from Mexico
            </div>
          </TimelineItem>
          
          {/* Step 5 */}
          <TimelineItem 
            title="English Program" 
            duration="3-12 Months"
            icon="📚"
          >
            <p className="text-gray-700">
              Study in our intensive English program, improving your skills through classes, activities, and cultural experiences.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "I made so much progress in just 6 months! My teachers were amazing." - Mei from China
            </div>
          </TimelineItem>
          
          {/* Step 6 */}
          <TimelineItem 
            title="University Transition" 
            duration="1-2 Months"
            icon="🎓"
          >
            <p className="text-gray-700">
              Complete your English program and transition to your degree program at a U.S. university without taking the TOEFL.
            </p>
            <div className="mt-2 text-sm text-gray-600 italic">
              "Thanks to INTERLINK, I'm now studying Computer Science at my dream university!" - Raj from India
            </div>
          </TimelineItem>
        </Timeline>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#064088] mb-6">
            Ready to Start Your Journey?
          </h3>
          <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
            Apply to INTERLINK Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
