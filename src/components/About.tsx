import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Briefcase, TrendingUp, Lightbulb } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Engineering Lead',
      description: 'Specialized in building scalable systems using React, Node.js, and Spring Boot.'
    },
    {
      icon: Palette,
      title: 'Creative Specialist',
      description: '3+ years of driving digital marketing success through professional branding, vector art, and UI/UX design in Figma and Adobe XD.'
    },
    {
      icon: Users,
      title: 'Agile Leader',
      description: 'Currently serving as a Project Manager at Rapidventure, ensuring seamless delivery through Agile methodologies.'
    },
    {
      icon: Briefcase,
      title: 'Digital Marketing',
      description: 'Over 3 years of experience crafting high-conversion marketing assets and brand strategies for diverse business sectors.'
    },
    {
      icon: TrendingUp,
      title: 'Full-Stack Development',
      description: 'Expert in MERN stack development, building digital products that are as functional as they are visually compelling.'
    },
    {
      icon: Lightbulb,
      title: 'UI/UX Expertise',
      description: 'Designing intuitive, user-centered interfaces with Figma and Adobe XD that drive engagement and conversion.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">ABOUT ME</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a versatile <span className="text-cyan-400 font-semibold">IT Undergraduate at the University of Moratuwa</span> with a unique professional background that spans both engineering and creative design. With over <span className="text-cyan-400 font-semibold">3 years of experience in the digital marketing field</span>, I combine <span className="text-cyan-400 font-semibold">MERN stack development</span> with high-end <span className="text-cyan-400 font-semibold">graphic design</span> and <span className="text-cyan-400 font-semibold">UI/UX expertise</span> to build digital products that are as functional as they are visually compelling.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              className="bg-black/40 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 holographic"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4 mx-auto">
                <feature.icon className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 bg-black/40 p-8 rounded-lg border border-gray-700 scanner-line"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am an IT undergraduate at the University of Moratuwa with a unique dual expertise in both software engineering and creative design. My journey started with a deep curiosity for how digital systems work and evolved into a passion for building full-stack applications while simultaneously mastering the art of visual communication through graphic design and digital marketing.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With over 3 years in the digital marketing field, I bring a rare combination of technical precision and creative flair. Currently, I lead technical lifecycles as a Project Manager at Rapidventure Business Solutions, applying Agile methodologies to deliver scalable solutions that make a real impact.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">3+</div>
                  <div className="text-cyan-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;