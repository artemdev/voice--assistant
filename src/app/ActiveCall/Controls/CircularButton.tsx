const VARIANT_STYLES = {
    gold: `
            bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500
            text-gray-900
            shadow-[0_10px_30px_rgba(251,191,36,0.4),inset_0_2px_6px_rgba(255,255,255,0.5),inset_0_-3px_6px_rgba(0,0,0,0.2)]
            hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
            hover:shadow-[0_0px_20px_rgba(251,191,36,0.6),inset_0_2px_6px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.2)]
            hover:scale-105 sm:hover:scale-110
        `,
    record: `
            bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
            text-red-600
            shadow-[0_10px_20px_rgba(0,0,0,0.25),inset_0_2px_6px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.1)]
            hover:from-gray-100 hover:via-gray-200 hover:to-gray-300
            sm:hover:shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_2px_6px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(0,0,0,0.15)]
            hover:scale-105 sm:hover:scale-110
        `,
}

export default function CircularButton({
    onClick,
    variant,
    icon,
}: {
    onClick: () => void
    variant: keyof typeof VARIANT_STYLES
    icon: React.ReactNode
}) {
    return (
        <button
            onClick={onClick}
            className={`
                relative
                w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px]
                rounded-full
                flex items-center justify-center
                transition-all duration-200 ease-out
                hover:cursor-pointer
                ${VARIANT_STYLES[variant]}
            `}
        >
            <span>{icon}</span>
        </button>
    )
}
