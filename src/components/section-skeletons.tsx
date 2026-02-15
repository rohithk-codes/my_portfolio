import { Skeleton } from "@/components/ui/skeleton"

export function SectionSkeleton() {
    return (
        <div className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-4 flex flex-col items-center text-center">
                <Skeleton className="h-12 w-64 mx-auto" />
                <Skeleton className="h-6 w-96 max-w-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="glass p-6 rounded-2xl space-y-4">
                        <Skeleton className="h-48 w-full rounded-xl" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function HeroSkeleton() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center container mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Skeleton className="h-20 w-3/4" />
                        <Skeleton className="h-10 w-1/2" />
                    </div>
                    <Skeleton className="h-24 w-full" />
                    <div className="flex gap-4">
                        <Skeleton className="h-14 w-40 rounded-xl" />
                        <Skeleton className="h-14 w-40 rounded-xl" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Skeleton className="h-[400px] w-[400px] rounded-full" />
                </div>
            </div>
        </div>
    )
}

export function AboutSkeleton() {
    return (
        <div className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="flex justify-center">
                    <Skeleton className="h-[400px] w-[400px] rounded-full sm:rounded-[40px]" />
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-12 w-48" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-24 w-full" />
                </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
                <Skeleton className="h-12 w-64 mx-auto" />
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-8 items-center">
                        <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                        <Skeleton className="h-24 w-full rounded-3xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SkillsSkeleton() {
    return (
        <div className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-4 flex flex-col items-center text-center">
                <Skeleton className="h-12 w-64 mx-auto" />
                <Skeleton className="h-6 w-96 max-w-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="glass p-8 rounded-2xl space-y-6">
                        <Skeleton className="h-8 w-40" />
                        <div className="flex flex-wrap gap-3">
                            {[...Array(4)].map((_, j) => (
                                <Skeleton key={j} className="h-10 w-24 rounded-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
