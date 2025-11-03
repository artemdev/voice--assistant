import { cn } from '@/lib/utils'

import { Button, buttonVariants } from '@/components/ui/button'

import { type VariantProps } from 'class-variance-authority'

export default function ActionButton({
    handleClick,
    className,
    children,
    type,
    variant,
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
        handleClick?: () => void
    }) {
    return (
        <Button
            variant={variant}
            type={type}
            onClick={handleClick}
            className={cn(
                'bg-gradient-to-b from-blue-400 to-blue-500 ext-white font-mono font-bold text-3xl tracking-tight rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:cursor-pointer',
                className
            )}
        >
            {children}
        </Button>
    )
}
