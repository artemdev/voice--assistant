export function SectionTitle({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <h3
            className={
                'text-lg sm:text-xl font-semibold text-gray-800 ' + className
            }
        >
            {children}
        </h3>
    )
}
