import { motion } from "framer-motion"

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] backdrop-blur-3xl will-change-opacity"
        >
            <div className="relative flex flex-col items-center">
                {/* Loader Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 will-change-transform">
                    {/* Animated Glowing Ring - Pure CSS Spin */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan animate-spin duration-[3s]"
                        style={{ padding: '2px' }}>
                        <div className="w-full h-full rounded-full bg-[#020617] backdrop-blur-3xl" />
                    </div>

                    {/* Inner Pulsing Circle */}
                    <div className="absolute inset-4 rounded-full glass flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 animate-pulse-glow will-change-[filter,opacity]" />

                        {/* Profile Photo - Optimized loading */}
                        <img
                            src="/profile.webp"
                            alt="Loading"
                            loading="eager"
                            className="w-full h-full object-cover opacity-50 grayscale scale-110"
                        />
                    </div>

                    {/* Rotating Shine Effect */}
                    <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-white/40 blur-sm rounded-full animate-pulse" />
                    </div>
                </div>

                {/* CSS-based Typing Text */}
                <div className="mt-12 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-gradient h-[40px] flex items-center justify-center overflow-hidden border-r-2 border-neon-cyan animate-typing whitespace-nowrap">
                        Loading Rohith's Portfolio...
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm uppercase tracking-[0.3em] opacity-60 animate-pulse">
                        Initialising System
                    </p>
                </div>

                {/* Decorative Orbs - Pure CSS Animations */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-purple/10 blur-[80px] rounded-full animate-orb will-change-transform" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-cyan/10 blur-[80px] rounded-full animate-orb will-change-transform" style={{ animationDelay: '2s' }} />
            </div>
        </motion.div>
    )
}
