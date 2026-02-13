import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface ThreeDGlassProfileProps {
    src: string;
    alt: string;
}

const ThreeDGlassProfile: React.FC<ThreeDGlassProfileProps> = ({ src, alt }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Reverse for natural tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5) from center of the card
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = (mouseXPos / width) - 0.5;
        const yPct = (mouseYPos / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center perspective-[1200px]"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative w-[300px] h-[400px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[480px]"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* ─── Offset Back Glass Pane ─── */}
                {/* A large, tilted glass pane behind everything */}
                <div
                    className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px]"
                    style={{
                        transform: "translateZ(-80px) translateX(-40px) translateY(-20px) rotateZ(-5deg)",
                        boxShadow: "0 0 40px rgba(0,0,0,0.5)"
                    }}
                />

                {/* ─── Second Back Layer (The 'Frame' behind) ─── */}
                <div
                    className="absolute inset-0 rounded-2xl border-[2px] border-white/20 bg-[#050508]/40"
                    style={{
                        transform: "translateZ(-40px)",
                    }}
                >
                    {/* Horizontal glow line */}
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-500/30" />
                </div>

                {/* ─── The Image Layer ─── */}
                <div
                    className="absolute inset-4 flex items-center justify-center"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient to blend bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
                    </div>
                </div>

                {/* ─── Front Glass Layer (The Main Floating Frame) ─── */}
                {/* Clean, sharp glass edges, NO fill blurring to keep image sharp */}
                <div
                    className="absolute -inset-6 rounded-3xl border-[1.5px] border-white/30"
                    style={{
                        transform: "translateZ(60px)",
                        boxShadow: "inset 0 0 20px rgba(255,255,255,0.05), 0 0 20px rgba(6,182,212,0.2)"
                    }}
                >
                    {/* Corner Accents */}
                    <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[3px] border-l-[3px] border-cyan-400 rounded-tl-3xl" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[3px] border-r-[3px] border-purple-500 rounded-br-3xl" />

                    {/* Glossy Reflection Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none" />
                </div>

                {/* ─── Floating Particles/Sparkles ─── */}
                <div
                    className="absolute -right-8 top-10 w-3 h-3 bg-cyan-400 rounded-full blur-[2px]"
                    style={{ transform: "translateZ(80px)" }}
                />
                <div
                    className="absolute -left-4 bottom-20 w-2 h-2 bg-purple-400 rounded-full blur-[1px]"
                    style={{ transform: "translateZ(90px)" }}
                />
            </motion.div>
        </div>
    );
};

export default ThreeDGlassProfile;

