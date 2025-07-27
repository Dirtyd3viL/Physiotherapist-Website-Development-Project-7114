import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiArrowRight } = FiIcons;

const BookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
          >
            <div className="relative z-10 flex items-center space-x-2">
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span className="font-semibold">Book</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingButton;