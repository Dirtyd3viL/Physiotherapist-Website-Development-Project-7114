import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiAward, FiCheckCircle, FiArrowRight, FiStar, FiPlay } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiHeart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with genuine care for your recovery journey',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: FiUsers,
      title: 'Expert Treatment',
      description: 'MPT qualified with specialized training in musculoskeletal physiotherapy',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FiAward,
      title: 'Proven Results',
      description: 'Years of experience helping patients achieve pain-free movement',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const services = [
    'Musculoskeletal Assessment & Treatment',
    'Sports Injury Management',
    'Kinesio Taping',
    'Post-Surgical Rehabilitation',
    'Chronic Pain Management',
    'Postural Correction'
  ];

  const stats = [
    { number: '500+', label: 'Patients Healed' },
    { number: '98%', label: 'Success Rate' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6"
              >
                <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
                Mumbai's Trusted Physiotherapist
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Heal.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Move.
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Thrive.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your pain into power with <strong>Dr. Samiksha Dandekar</strong> - 
                Mumbai's expert physiotherapist specializing in musculoskeletal recovery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                
                <button className="group flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center mr-3 group-hover:shadow-xl transition-shadow">
                    <SafeIcon icon={FiPlay} className="w-5 h-5 text-blue-600 ml-1" />
                  </div>
                  Watch Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-10"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Pain-Free</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-xl z-10"
                >
                  <div className="flex items-center space-x-2 text-white">
                    <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    <span className="text-sm font-medium">500+ Healed</span>
                  </div>
                </motion.div>

                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Dr. Samiksha Dandekar - Expert Physiotherapist"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Dr. Samiksha Dandekar</h3>
                    <p className="text-blue-600 font-semibold">MPT - Musculoskeletal Expert</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Why Choose Excellence?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of expertise, compassion, and cutting-edge treatment methods
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
                <div className="relative p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={feature.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Comprehensive Care
                </span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                From assessment to recovery, we provide specialized treatment plans 
                tailored to your unique needs and lifestyle.
              </p>
              
              <div className="space-y-4 mb-10">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-blue-100 group-hover:text-white transition-colors">{service}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 group"
              >
                Explore All Services
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Physiotherapy Treatment"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Ready to Transform Your Life?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Take the first step towards a pain-free, active lifestyle. 
              Your journey to wellness starts with a single click.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Book Your Session
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link
                to="/about"
                className="px-12 py-6 rounded-2xl font-bold text-xl text-gray-700 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;