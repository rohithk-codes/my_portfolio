import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "glass border-white/10 flex h-12 w-full min-w-0 rounded-2xl bg-transparent px-4 py-3 text-lg shadow-xs transition-all outline-none placeholder:text-muted-foreground/50 disabled:pointer-events-none disabled:opacity-50",
        "focus:border-neon-purple/50 focus:ring-neon-purple/20 focus:ring-2",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
