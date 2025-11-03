import * as motion from 'motion/react-client'

import AssistantWrapper from './AssistantWrapper'

export function ListeningAssistant() {
    return (
        <AssistantWrapper>
            {/* Rotating background orb */}
            <motion.div
                className="absolute rounded-full w-full h-full bg-[conic-gradient(from_0deg,#60a5fa,#3b82f6,#2563eb,#60a5fa)] shadow-[0_0_80px_rgba(59,130,246,0.6),0_0_120px_rgba(37,99,235,0.4),inset_0_0_60px_rgba(255,255,255,0.1)]"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Center overlay with gradient */}
            <div className="absolute rounded-full w-[85%] h-[85%] bg-[radial-gradient(circle,rgba(59,130,246,0.8)_0%,rgba(59,130,246,0.95)_100%)]" />

            {/* Audio bars visualization */}
            <div className="absolute flex items-center justify-center gap-1 sm:gap-1.5">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 sm:w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        animate={{
                            height: [60, 40 + 1 * 30, 60],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.08,
                        }}
                    />
                ))}
            </div>
        </AssistantWrapper>
    )
}
