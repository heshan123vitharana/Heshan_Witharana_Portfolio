import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: false
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics dashboard with machine learning insights, data visualization, and predictive analytics for business intelligence.',
      technologies: ['Python', 'React', 'TensorFlow', 'D3.js'],
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/ai-dashboard',
      liveUrl: 'https://ai-dashboard-demo.com',
      featured: true
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern real estate listing platform with advanced search, virtual tours, and integrated CRM system for agents.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/real-estate-platform',
      liveUrl: 'https://realestate-demo.com',
      featured: false
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout tracking, nutrition planning, and social features for fitness enthusiasts.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/fitness-tracker',
      liveUrl: 'https://fitness-demo.com',
      featured: false
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure blockchain-based voting system ensuring transparency, immutability, and voter privacy using smart contracts.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      imageUrl: 'https://images.pexels.com/photos/8062013/pexels-photo-8062013.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshanwitharana/blockchain-voting',
      liveUrl: 'https://voting-demo.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest development projects showcasing modern technologies and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-900/80 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      className="bg-black/80 p-3 rounded-full text-white hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="bg-black/80 p-3 rounded-full text-white hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <Zap size={12} className="mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;