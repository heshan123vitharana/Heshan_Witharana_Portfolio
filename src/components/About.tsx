import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, Python, and modern web technologies'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating stunning visual identities, logos, and digital artwork'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable, and efficient applications'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Designing intuitive interfaces that users love'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">ABOUT ME</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and designer who loves bringing ideas to life through code and creativity. 
            With expertise in both technical development and visual design, I create comprehensive digital solutions 
            that not only function flawlessly but also captivate users visually.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/40 p-8 rounded-lg border border-gray-700 scanner-line"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started as a curious developer exploring the endless possibilities of code. 
                Over the years, I've evolved into a full-stack developer with a keen eye for design, 
                constantly pushing the boundaries of what's possible in web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My dual expertise in development and design allows me to create cohesive, 
                end-to-end solutions that are both technically sound and visually stunning.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">5+</div>
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