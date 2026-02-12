import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Award, Briefcase, Palette } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  techStack: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  award?: string;
  icon: React.ElementType;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Smart Paddy Management System',
      role: 'Lead Developer',
      techStack: 'React • Node.js • Express.js • MySQL',
      description: 'A multi-user platform for enhancing paddy management in Sri Lanka with automated digital certificate generation.',
      highlights: [
        'Directed the development of a multi-user platform with automated digital certificate generation.',
        '3rd Place at the ICIET 2025 International Research Conference.'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      image: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshan123vitharana',
      award: '🏆 3rd Place — ICIET 2025',
      icon: Award,
    },
    {
      title: 'Enterprise Inventory System',
      role: 'Full-Stack Developer',
      techStack: 'MERN Stack • JWT • Real-time Updates',
      description: 'A role-based enterprise inventory system with automated stock alerts and visual analytics.',
      highlights: [
        'Engineered a role-based system with automated stock alerts and visual analytics.',
        'Implemented JWT authentication and real-time inventory updates.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshan123vitharana',
      icon: Briefcase,
    },
    {
      title: 'Visual Branding & UI Portfolio',
      role: 'Graphic Designer',
      techStack: 'Figma • Photoshop • Digital Marketing',
      description: '3+ years of experience delivering professional branding and high-conversion marketing assets for diverse business sectors.',
      highlights: [
        '3+ years delivering professional branding and high-conversion marketing assets.',
        'Designed visual identities for diverse business sectors across digital marketing.'
      ],
      technologies: ['Figma', 'Photoshop', 'Adobe XD', 'Branding'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/heshan123vitharana',
      icon: Palette,
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">FEATURED PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing impactful solutions across engineering and creative design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-black/40 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {project.award && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/30">
                      {project.award}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <project.icon className="text-cyan-400 w-5 h-5" />
                  <span className="text-cyan-400 text-sm font-medium">{project.role}</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-mono">{project.techStack}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1 text-xs">▸</span>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
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