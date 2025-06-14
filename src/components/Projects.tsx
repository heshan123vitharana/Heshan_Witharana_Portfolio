import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'React-Professional-calculator',
      description: 'A modern, feature-rich scientific calculator built with React, featuring a beautiful animated particle background and advanced engineering mathematics functions.',
      technologies: ['React', 'Vite', 'CSS Models', 'Canvas API'],
      image: 'https://i.postimg.cc/JzqzgQxL/Screenshot-2025-05-04-121129.png',
      githubUrl: 'https://github.com/heshan123vitharana/Professional-React-Calculator-with-scientific-functions-and-animated-background.git',
      liveUrl: 'https://heshan123vitharana.github.io/Professional-React-Calculator-with-scientific-functions-and-animated-background/'
    },
    {
      title: 'To Do List Application',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/fyt3Q0Lv/Screenshot-2025-04-29-130357.png',
      githubUrl: 'https://github.com/heshan123vitharana/To-Do-List-App.git',
      liveUrl: 'https://heshan123vitharana.github.io/To-Do-List-App/',
    },
    {
      title: 'Personal-Portfolio-Website',
      description: 'Personal portfolio website built with HTML, CSS, JavaScript, and Node.js. It showcases my skills, projects, and experience as a software engineer. Features include a responsive design with sections for Home, Skills, Projects, About Me, and Contact.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/dQ2LMdJ4/Screenshot-80.png',
      githubUrl: 'https://github.com/heshan123vitharana/Personal-Portfolio-Website.git',
      liveUrl: 'https://heshan123vitharana.github.io/Personal-Portfolio-Website/'
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
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work and personal projects
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
              className="bg-black/40 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full"
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
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
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