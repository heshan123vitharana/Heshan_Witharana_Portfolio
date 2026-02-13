
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TechBackground: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const y3 = useTransform(scrollY, [0, 500], [0, 100]);
    const rotate = useTransform(scrollY, [0, 500], [0, 60]);
    const rotateReverse = useTransform(scrollY, [0, 500], [0, -60]);

    // Interactive 3D State
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Use spring values for smooth rotation
    const mouseRotateX = useSpring(0, { stiffness: 100, damping: 30 });
    const mouseRotateY = useSpring(0, { stiffness: 100, damping: 30 });

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Add global event listeners for smoother drag handling outside component
    useEffect(() => {
        const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
            if (!containerRef.current) return;

            // Calculate rotation based on cursor position ensuring "free drag" feel
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Normalize coordinates to -1 to 1
            const xPct = (clientX / innerWidth) - 0.5;
            const yPct = (clientY / innerHeight) - 0.5;

            // Map to rotation degrees (inverted Y for natural feel)
            mouseRotateY.set(xPct * 20); // Rotate Y axis based on X position
            mouseRotateX.set(-yPct * 20); // Rotate X axis based on Y position
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseRotateX, mouseRotateY]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden z-0"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ perspective: '1200px' }} // Global perspective for the scene
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    rotateX: mouseRotateX,
                    rotateY: mouseRotateY,
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* 3D Grid Floor with Movement */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div
                        className="absolute inset-x-[-50%] bottom-[-20%] h-[150%] border-t border-cyan-500/30 origin-bottom"
                        style={{
                            transform: 'rotateX(60deg) scale(2) translateZ(-100px)', // Added depth
                            backgroundImage: 'linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                            maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                        }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            animate={{ backgroundPositionY: [0, 60] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{
                                backgroundImage: 'inherit',
                                backgroundSize: 'inherit',
                            }}
                        />
                    </div>
                </div>

                {/* Glowing Orbs - Parallax Depth */}
                <motion.div
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
                    style={{ translateZ: '-200px' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"
                    style={{ translateZ: '-100px' }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Complex Geometric Shapes - Floating in 3D */}
                {/* Top Left Cube */}
                <motion.div
                    style={{ y: y1, rotate: rotate, x: -50, z: 50 }}
                    className="absolute top-[15%] left-[10%] w-24 h-24 border border-cyan-500/30 rounded-xl backdrop-blur-[2px] opacity-40 pointer-events-none"
                    animate={{
                        rotateX: [0, 180, 360],
                        rotateY: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-2 border border-purple-500/20 rounded-lg" />
                </motion.div>

                {/* Bottom Right Circle Group */}
                <motion.div
                    style={{ y: y2, x: 50, z: 100 }}
                    className="absolute bottom-[20%] right-[5%] w-64 h-64 border border-purple-500/20 rounded-full opacity-30 flex items-center justify-center dashed-circle pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-48 h-48 border border-cyan-500/20 rounded-full" />
                    <div className="absolute w-32 h-32 border border-purple-500/30 rounded-full" />
                </motion.div>

                {/* Floating Pyramids/Triangles */}
                <motion.div
                    style={{ y: y3, rotate: rotateReverse, z: -50 }}
                    className="absolute top-[40%] right-[20%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-cyan-500/20 opacity-30 blur-[1px] pointer-events-none"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Circuit Lines & Data Streams */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" style={{ transform: 'translateZ(20px)' }}>
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                        </linearGradient>
                    </defs>

                    {/* Horizontal Data Lines */}
                    <motion.line
                        x1="-100%" y1="20%" x2="200%" y2="20%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                        animate={{ x: [-1000, 1000] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        opacity="0.2"
                    />
                    <motion.line
                        x1="-100%" y1="80%" x2="200%" y2="80%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                        animate={{ x: [-1000, 1000] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                        opacity="0.1"
                    />

                    {/* Vertical Data Lines */}
                    <motion.line
                        x1="10%" y1="-100%" x2="10%" y2="200%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                        animate={{ y: [-1000, 1000] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                        opacity="0.1"
                    />

                    {/* Curved Connection Lines */}
                    <motion.path
                        d="M0,300 Q400,100 800,300 T1600,300"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M1600,600 Q1200,800 800,600 T0,600"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                    />
                </svg>

                {/* Hexagon Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </motion.div>
        </div>
    );
};

export default TechBackground;

