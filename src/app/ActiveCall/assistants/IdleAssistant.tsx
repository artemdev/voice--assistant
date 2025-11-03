import * as motion from 'motion/react-client'

import AssistantWrapper from './AssistantWrapper'

export function IdleAssistant() {
    return (
        <AssistantWrapper>
            {/* Outer glow ring */}
            <motion.div
                className="absolute rounded-full w-[calc(100%+30px)] h-[calc(100%+30px)] bg-[radial-gradient(circle,rgba(209,213,219,0.3)_0%,transparent_70%)]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Main orb */}
            <motion.div
                className="absolute rounded-full w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-[0_0_60px_rgba(156,163,175,0.4),0_0_100px_rgba(209,213,219,0.3),inset_0_0_60px_rgba(255,255,255,0.2)]"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Inner highlight */}
            <motion.div
                className="absolute rounded-full blur-md w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(229,231,235,0.5)_100%)]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                }}
            />
        </AssistantWrapper>
    )
}
