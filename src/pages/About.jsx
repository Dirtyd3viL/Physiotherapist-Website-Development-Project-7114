import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGraduationCap, FiHeart, FiTrendingUp, FiUsers, FiAward, FiTarget, FiStar } = FiIcons;

const About = () => {
  const qualifications = [
    'MPT (Musculoskeletal Physiotherapy)',
    'Bachelor of Physiotherapy',
    'Certified in Kinesio Taping',
    'Sports Injury Management Certification'
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Compassionate Care',
      description: 'Every patient receives personalized attention and genuine care throughout their recovery journey',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with the latest physiotherapy techniques and evidence-based practices',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FiUsers,
      title: 'Patient-Centered Approach',
      description: 'Treatment plans tailored to individual needs, goals, and lifestyle for optimal outcomes',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const achievements = [
    { icon: FiAward, title: '500+ Lives Transformed', desc: 'Successful patient recoveries' },
    { icon: FiTarget, title: '98% Success Rate', desc: 'Proven treatment outcomes' },
    { icon: FiStar, title: '5+ Years Experience', desc: 'Dedicated practice in Mumbai' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6"
              >
                <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2" />
                Meet Your Wellness Partner
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Dr. Samiksha
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Dandekar
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                A passionate physiotherapist dedicated to transforming lives through 
                expert care, innovative treatments, and genuine compassion.
              </p>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <SafeIcon icon={FiGraduationCap} className="w-6 h-6 text-blue-600 mr-3" />
                  Credentials & Expertise
                </h3>
                <div className="grid gap-4">
                  {qualifications.map((qualification, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center group"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-medium">{qualification}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Achievement Cards */}
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4 + index,
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute bg-white p-4 rounded-2xl shadow-xl z-10 ${
                      index === 0 ? '-top-6 -left-6' :
                      index === 1 ? 'top-1/2 -right-8' :
                      '-bottom-6 left-4'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <SafeIcon icon={achievement.icon} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600">{achievement.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Dr. Samiksha Dandekar"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Your Healing Partner</h3>
                    <p className="text-blue-600 font-semibold">MPT - Musculoskeletal Expert</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                My Philosophy
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Healing is more than treating symptoms—it's about understanding you as a whole person
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <blockquote className="text-2xl lg:text-3xl font-light text-blue-100 mb-8 leading-relaxed italic">
                  "Every patient deserves personalized care that addresses not just their physical symptoms, 
                  but their overall well-being and life goals."
                </blockquote>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6"></div>
                <p className="text-lg text-blue-200 leading-relaxed">
                  My approach combines evidence-based treatment techniques with genuine compassion, 
                  ensuring you receive the best possible care for your unique situation.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Treatment Philosophy"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of care and treatment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
                <div className="relative p-10 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={value.icon} className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
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
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Impact & Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Lives Transformed', desc: 'Successful patient recoveries across Mumbai' },
              { number: '98%', label: 'Success Rate', desc: 'Proven outcomes with evidence-based care' },
              { number: '5+', label: 'Years Dedicated', desc: 'Continuous learning and patient service' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;