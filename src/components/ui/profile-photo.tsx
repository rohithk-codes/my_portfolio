import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfilePhotoProps {
    src: string
    className?: string

}

export function ProfilePhoto({ src, className }: ProfilePhotoProps) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <motion.div
            initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
            animate={isMobile ? false : { opacity: 1, scale: 1 }}
            className={cn("relative w-64 h-64 sm:w-80 sm:h-80 mx-auto", className)}
        >
            {/* Floating Animation Wrapper */}
            <motion.div
                animate={isMobile ? false : {
                    y: [0, -20, 0],
                }}
                transition={isMobile ? { duration: 0 } : {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-full h-full"
            >
                {/* Background Glass Card Effect - Backdrop blur disabled via CSS for mobile */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl -rotate-6 scale-105" />

                {/* Glowing Gradient Ring */}
                <div className={cn(
                    "absolute inset-0 p-1.5 rounded-[2.5rem] bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-cyan",
                    !isMobile && "animate-pulse-glow"
                )}>
                    <div className="w-full h-full rounded-[2.2rem] bg-[#020617] p-1 overflow-hidden relative group">

                        {/* The Image */}
                        <img
                            src={src}
                            alt="Profile"
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Reflection/Shine Effect - Only on Desktop */}
                        {!isMobile && (
                            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[1.8rem]">
                                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-shine"
                                    style={{ animationDuration: '4s' }} />
                            </div>
                        )}

                        {/* Subtle Inner Glow */}
                        <div className="absolute inset-0 rounded-[1.8rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
                    </div>
                </div>

                {/* Outer Glow Orbs - Only on Desktop */}
                {!isMobile && (
                    <>
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-purple/20 blur-[60px] rounded-full animate-orb" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-cyan/20 blur-[60px] rounded-full animate-orb" style={{ animationDelay: '2s' }} />
                    </>
                )}
            </motion.div>
        </motion.div>
    )
}
