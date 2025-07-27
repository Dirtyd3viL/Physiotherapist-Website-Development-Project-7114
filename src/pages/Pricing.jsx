import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiClock, FiUsers, FiHeart } = FiIcons;

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Single Session',
      price: '₹1,000',
      duration: 'Per Session',
      description: 'Perfect for one-time consultations or specific treatments',
      features: [
        'Comprehensive assessment',
        'Personalized treatment',
        '45-60 minute session',
        'Exercise recommendations',
        'Post-session guidance'
      ],
      popular: false
    },
    {
      name: 'Treatment Package',
      price: '₹4,500',
      duration: '5 Sessions',
      description: 'Ideal for ongoing treatment and rehabilitation programs',
      features: [
        'Initial assessment included',
        'Progress monitoring',
        'Customized treatment plan',
        'Home exercise program',
        'WhatsApp support',
        'Flexible scheduling'
      ],
      popular: true
    },
    {
      name: 'Comprehensive Care',
      price: '₹8,500',
      duration: '10 Sessions',
      description: 'Complete rehabilitation program for complex conditions',
      features: [
        'Detailed initial evaluation',
        'Ongoing progress tracking',
        'Advanced treatment techniques',
        'Lifestyle modification guidance',
        'Priority booking',
        'Extended support period'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: FiClock,
      service: 'Home Visits',
      price: '₹1,500',
      description: 'Physiotherapy sessions at your home for added convenience'
    },
    {
      icon: FiUsers,
      service: 'Group Sessions',
      price: '₹700',
      description: 'Small group therapy sessions (max 3 people)'
    },
    {
      icon: FiHeart,
      service: 'Wellness Programs',
      price: '₹2,500',
      description: 'Monthly wellness and prevention programs'
    }
  ];

  const faqs = [
    {
      question: 'What is included in each session?',
      answer: 'Each session includes a thorough assessment, personalized treatment using various physiotherapy techniques, exercise recommendations, and guidance for home care.'
    },
    {
      question: 'How long is each session?',
      answer: 'Standard sessions are 45-60 minutes long, allowing adequate time for assessment, treatment, and education.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We provide detailed receipts that you can submit to your insurance provider for reimbursement. Please check with your insurance company about physiotherapy coverage.'
    },
    {
      question: 'Can I cancel or reschedule appointments?',
      answer: 'Yes, appointments can be rescheduled with at least 24 hours notice. Cancellations with less than 24 hours notice may incur a fee.'
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Affordable physiotherapy sessions with flexible payment options to suit your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-full font-medium transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to meet your unique needs and preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              Flexible payment methods for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accepted Payment Methods</h3>
              <ul className="space-y-3">
                {[
                  'Cash payments',
                  'UPI transfers (GPay, PhonePe, Paytm)',
                  'Bank transfers (NEFT/RTGS)',
                  'Credit/Debit cards',
                  'Cheque payments'
                ].map((method, index) => (
                  <li key={index} className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Policies</h3>
              <ul className="space-y-3">
                {[
                  'Payment due at time of service',
                  'Package payments can be made in advance',
                  'Detailed receipts provided for insurance',
                  'Refunds available for unused sessions',
                  'Student discounts available'
                ].map((policy, index) => (
                  <li key={index} className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{policy}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about pricing and services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Start Your Treatment?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss your needs and choose the best treatment plan for you
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;