import { cn } from '@/lib/utils'

export function Card({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'bg-gradient-to-br from-blue-50/80 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100/50 shadow-sm',
                className
            )}
        >
            {children}
        </div>
    )
}
