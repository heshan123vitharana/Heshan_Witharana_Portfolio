import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, Python, and modern web technologies with focus on clean code and best practices'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in SQL, MongoDB, and Redis for efficient data storage and retrieval'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Experience with AWS, Azure, and Google Cloud Platform for scalable applications'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating stunning visual identities, logos, and digital artwork with modern design principles'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable, and efficient applications with modern optimization techniques'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Designing intuitive interfaces that users love with focus on accessibility and usability'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
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
            I'm a passionate Full Stack Developer with a keen eye for design and a drive for creating exceptional digital experiences. 
            With expertise in both technical development and visual design, I craft comprehensive solutions that combine 
            technical excellence with aesthetic appeal.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
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
                I'm currently an undergraduate student with 1.5 years of hands-on experience in the IT industry. My journey in tech started with a strong curiosity to understand how digital systems work and how they can solve real-world problems. Over time, this passion led me to pursue full-stack development, where I've built expertise in both frontend and backend technologies. I continuously explore new tools, frameworks, and industry trends to stay ahead in this ever-evolving field.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in continuous learning and pushing the boundaries of what's possible in web development, 
                while maintaining a strong focus on user experience and performance optimization.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">1.5+</div>
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