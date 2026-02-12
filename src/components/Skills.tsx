import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Languages';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'HTML5/CSS3', level: 92, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Spring Boot', level: 78, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'MySQL', level: 82, category: 'Database' },
    { name: 'Java', level: 82, category: 'Languages' },
    { name: 'Python', level: 78, category: 'Languages' },
    { name: 'PHP', level: 72, category: 'Languages' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Languages'];

  const skillsData = {
    labels: ['React', 'Node.js', 'Express.js', 'Spring Boot', 'JavaScript', 'Java', 'Python', 'MySQL'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 88, 85, 78, 90, 82, 78, 82],
        backgroundColor: [
          'rgba(0, 255, 255, 0.6)',
          'rgba(255, 0, 255, 0.6)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(255, 165, 0, 0.6)',
          'rgba(255, 192, 203, 0.6)',
          'rgba(173, 216, 230, 0.6)',
          'rgba(144, 238, 144, 0.6)',
        ],
        borderColor: [
          'rgba(0, 255, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(255, 192, 203, 1)',
          'rgba(173, 216, 230, 1)',
          'rgba(144, 238, 144, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const designSkillsData = {
    labels: ['UI/UX Design', 'Graphic Design', 'Branding', 'Digital Marketing', 'Vector Art', 'Figma'],
    datasets: [
      {
        label: 'Design Skills',
        data: [92, 90, 87, 88, 85, 93],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 255, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 255, 255, 1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#00ffff',
        bodyColor: '#ffffff',
        borderColor: '#00ffff',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 255, 255, 0.1)',
        },
        ticks: {
          color: '#00ffff',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 255, 255, 0.1)',
        },
        ticks: {
          color: '#00ffff',
          maxRotation: 45,
        },
      },
    },
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(0, 255, 255, 0.2)',
        },
        pointLabels: {
          color: '#00ffff',
          font: {
            size: 12,
          },
        },
        ticks: {
          color: '#00ffff',
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#00ffff',
        bodyColor: '#ffffff',
        borderColor: '#00ffff',
        borderWidth: 1,
      },
    },
  };

  // Creative & Technical Stack table data
  const stackDomains = [
    {
      domain: 'Design & Branding',
      tools: 'Figma, Adobe XD, Photoshop, Vector Art, Digital Marketing Strategy',
      color: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-500/30 hover:border-pink-500',
    },
    {
      domain: 'Development',
      tools: 'React, Node.js, Express.js, Spring Boot, MySQL, MongoDB',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500',
    },
    {
      domain: 'Management',
      tools: 'Agile (Scrum), ClickUp, Jira, SDLC, Stakeholder Communication',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30 hover:border-green-500',
    },
    {
      domain: 'Languages',
      tools: 'Java, JavaScript, Python, PHP, HTML5/CSS3',
      color: 'from-orange-500/20 to-yellow-500/20',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
    },
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Photoshop',
    'Git & GitHub',
    'ClickUp',
    'Jira',
    'Postman',
    'VS Code'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">CREATIVE & TECHNICAL STACK</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A multi-disciplinary toolkit spanning design, development, and project management
          </p>
        </motion.div>

        {/* Stack Domain Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {stackDomains.map((item, index) => (
            <motion.div
              key={item.domain}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.color} p-6 rounded-lg border ${item.borderColor} transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-orbitron font-bold text-white mb-3">
                {item.domain}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.tools}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/40 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">SKILLS & ANALYTICS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven insights into my technical expertise and creative capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 p-6 rounded-lg border border-gray-700 scanner-line"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">
              Technical Skills
            </h3>
            <div className="h-80">
              <Bar data={skillsData} options={chartOptions} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 p-6 rounded-lg border border-gray-700 scanner-line"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">
              Design Skills
            </h3>
            <div className="h-80">
              <Radar data={designSkillsData} options={radarOptions} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 p-8 rounded-lg border border-gray-700 holographic"
        >
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 p-4 rounded-lg border border-cyan-500/30 text-center hover:border-cyan-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-cyan-400 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '20+', label: 'Projects Completed', color: 'text-cyan-400' },
            { number: '100%', label: 'Client Satisfaction', color: 'text-green-400' },
            { number: '3+', label: 'Years Experience', color: 'text-purple-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl font-orbitron font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;