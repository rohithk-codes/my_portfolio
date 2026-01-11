import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    animate?: boolean
}

export function SectionHeader({ title, subtitle, className, animate = true }: SectionHeaderProps) {
    return (
        <div className={cn(
            "max-w-4xl mx-auto text-center mb-20",
            animate && "animate-float",
            className
        )}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-gradient">
                {title}
            </h2>
            {subtitle && (
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
