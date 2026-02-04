"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MovingBackground() {
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#020617]">
            {/* Optimized Dynamic Orbs - Reduced to 2 for performance, disabled on mobile */}
            {!isMobile && (
                <>
                    <motion.div
                        animate={{
                            x: [0, 80, 0],
                            y: [0, -80, 0],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-neon-purple/15 blur-[120px] rounded-full mix-blend-screen"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 80, 0],
                        }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-[30%] -right-[10%] w-[45%] h-[45%] bg-neon-cyan/10 blur-[130px] rounded-full mix-blend-screen"
                    />
                </>
            )}

            {/* Grid Pattern Layer */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Reduced Particle Field - Optimized for mobile/low-end performance */}
            {[...Array(isMobile ? 5 : 15)].map((_, i) => {
                const size = Math.random() * 1.5 + 0.5;
                const duration = Math.random() * 10 + 20;
                const delay = Math.random() * -30;

                return (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0,
                        }}
                        animate={{
                            y: ["0%", "100%"],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay,
                        }}
                        className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            willChange: "transform"
                        }}
                    />
                );
            })}
        </div>
    )
}
