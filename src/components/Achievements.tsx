import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Award, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface Achievement {
    icon: React.ElementType;
    title: string;
    description: string;
    category: string;
    color: string;
    glow: string;
}

const Achievements: React.FC = () => {
    const achievements: Achievement[] = [
        {
            icon: BookOpen,
            title: 'Published Researcher',
            description: 'Author of "Wee Saviya: A Digital Platform for Enhancing Paddy Management in Sri Lanka" — presented at ICIET 2025 International Research Conference.',
            category: 'Research',
            color: 'from-yellow-500/20 to-amber-500/20',
            glow: 'border-yellow-500/30 hover:border-yellow-500 hover:shadow-yellow-500/20',
        },
        {
            icon: Trophy,
            title: 'ICIET 2025 — 3rd Place',
            description: 'Awarded 3rd Place for the Smart Paddy Management System project at the ICIET 2025 International Research Conference.',
            category: 'Award',
            color: 'from-cyan-500/20 to-blue-500/20',
            glow: 'border-cyan-500/30 hover:border-cyan-500 hover:shadow-cyan-500/20',
        },
        {
            icon: Award,
            title: 'UI/UX Specialist',
            description: 'Multiple certifications in Figma, Adobe XD, and UI/UX Design via Udemy. Proficient in designing user-centered, high-conversion interfaces.',
            category: 'Certification',
            color: 'from-pink-500/20 to-purple-500/20',
            glow: 'border-pink-500/30 hover:border-pink-500 hover:shadow-pink-500/20',
        },
        {
            icon: ShieldCheck,
            title: 'Certified Professional',
            description: 'CCNA (Cisco Certified Network Associate), AI Fundamentals (IBM), and Node.js Certification (HackerRank).',
            category: 'Certification',
            color: 'from-green-500/20 to-emerald-500/20',
            glow: 'border-green-500/30 hover:border-green-500 hover:shadow-green-500/20',
        },
    ];

    return (
        <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                        <span className="gradient-text">ACHIEVEMENTS & CERTIFICATIONS</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Recognized contributions to research, design, and technology
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {achievements.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className={`bg-gradient-to-br ${item.color} p-8 rounded-lg border ${item.glow} transition-all duration-300 hover:shadow-lg`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 bg-black/30 rounded-lg flex items-center justify-center">
                                    <item.icon className="text-cyan-400 w-7 h-7" />
                                </div>
                                <div>
                                    <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider mb-1 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
