import * as motion from 'motion/react-client'

import AssistantWrapper from './AssistantWrapper'

export function SpeakingAssistant({
    interruptSpeaking,
}: {
    interruptSpeaking: () => void
}) {
    return (
        <AssistantWrapper>
            {/* Ripple effects */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full w-full h-full border-2 sm:border-3 ${
                        i % 2 === 0
                            ? 'border-purple-600/60'
                            : 'border-pink-500/60'
                    }`}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Main pulsing orb */}
            <motion.div
                className="absolute rounded-full w-full h-full bg-[linear-gradient(135deg,#a78bfa_0%,#c084fc_30%,#ec4899_100%)] shadow-[0_0_80px_rgba(168,85,247,0.6),0_0_120px_rgba(236,72,153,0.4),inset_0_0_60px_rgba(255,255,255,0.15)]"
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Inner glow layer */}
            <motion.div
                className="absolute rounded-full w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[20px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Interrupt button */}
            <button
                onClick={interruptSpeaking}
                className="absolute z-10 rounded-full w-[60%] h-[60%] flex items-center justify-center bg-white/5 hover:bg-white/20 transition-all cursor-pointer border-2 border-white/30 hover:border-white/50"
                aria-label="Interrupt speaking"
            >
                <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                    Tap to Interrupt
                </span>
            </button>
        </AssistantWrapper>
    )
}
