import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiShield, FiRefreshCw, FiZap, FiUser } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiActivity,
      title: 'Musculoskeletal Assessment & Treatment',
      description: 'Comprehensive evaluation and treatment of muscle, joint, and bone conditions using evidence-based techniques.',
      features: ['Joint mobilization', 'Soft tissue therapy', 'Movement analysis', 'Pain management']
    },
    {
      icon: FiTarget,
      title: 'Sports Injury Management',
      description: 'Specialized care for athletes and active individuals to recover from injuries and prevent future occurrences.',
      features: ['Injury assessment', 'Return-to-sport protocols', 'Performance optimization', 'Injury prevention']
    },
    {
      icon: FiShield,
      title: 'Kinesio Taping',
      description: 'Therapeutic taping technique to support muscles and joints while maintaining range of motion.',
      features: ['Pain reduction', 'Muscle support', 'Improved circulation', 'Enhanced healing']
    },
    {
      icon: FiRefreshCw,
      title: 'Post-Surgical Rehabilitation',
      description: 'Structured recovery programs following orthopedic surgeries to restore function and mobility.',
      features: ['Progressive exercises', 'Scar management', 'Strength building', 'Functional training']
    },
    {
      icon: FiZap,
      title: 'Chronic Pain Management',
      description: 'Comprehensive approach to managing long-term pain conditions through various therapeutic interventions.',
      features: ['Pain education', 'Exercise therapy', 'Manual techniques', 'Lifestyle modifications']
    },
    {
      icon: FiUser,
      title: 'Postural Correction',
      description: 'Assessment and treatment of postural imbalances to prevent pain and improve overall function.',
      features: ['Postural analysis', 'Ergonomic advice', 'Strengthening exercises', 'Movement re-education']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your condition, medical history, and functional goals'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Development of a personalized treatment plan tailored to your specific needs'
    },
    {
      step: '03',
      title: 'Active Treatment',
      description: 'Implementation of evidence-based interventions and therapeutic exercises'
    },
    {
      step: '04',
      title: 'Progress Monitoring',
      description: 'Regular assessment and adjustment of treatment based on your progress'
    },
    {
      step: '05',
      title: 'Maintenance & Prevention',
      description: 'Education and strategies to maintain improvements and prevent future issues'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Physiotherapy Services
            </h1>
            <p className="text-xl text-gray-600">
              Expert treatment solutions tailored to your specific needs and recovery goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure optimal outcomes for every patient
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Specialized Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dr. Samiksha's specialized training in musculoskeletal physiotherapy enables her to provide 
                targeted treatment for a wide range of conditions affecting the muscles, joints, and bones.
              </p>
              <div className="space-y-4">
                {[
                  'Back and neck pain',
                  'Joint replacement rehabilitation',
                  'Sports-related injuries',
                  'Arthritis management',
                  'Workplace injury recovery',
                  'Age-related mobility issues'
                ].map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Physiotherapy Treatment"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Treatment?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a consultation to discuss your specific needs and develop a personalized treatment plan
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;