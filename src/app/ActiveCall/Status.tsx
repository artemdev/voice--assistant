import { Mic, Volume2, PauseCircle } from 'lucide-react'

import { type Status } from '@/lib/types'
import { STATUS } from '@/lib/data'

const STATUS_CONFIG = {
    idle: {
        text: 'Paused',
        color: 'bg-gradient-to-r from-gray-300 to-gray-400',
        textColor: 'text-gray-700',
        icon: <PauseCircle className="w-4 h-4" />,
        glow: 'shadow-lg shadow-gray-300/40',
    },
    listening: {
        text: 'Listening',
        color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        textColor: 'text-white',
        icon: <Mic className="w-4 h-4" />,
        glow: 'shadow-lg shadow-blue-500/40',
    },
    speaking: {
        text: 'Speaking',
        color: 'bg-gradient-to-r from-purple-500 to-pink-500',
        textColor: 'text-white',
        icon: <Volume2 className="w-4 h-4" />,
        glow: 'shadow-lg shadow-purple-500/40',
    },
}
const STATUS_KEY_MAP: Record<Status, keyof typeof STATUS_CONFIG> = {
    [STATUS.IDLE]: 'idle',
    [STATUS['LISTENING-PAUSED']]: 'idle',
    [STATUS['SPEAKING-PAUSED']]: 'idle',
    [STATUS.LISTENING]: 'listening',
    [STATUS.SPEAKING]: 'speaking',
}

export default function Status({ status }: { status: Status }) {
    const config = STATUS_CONFIG[STATUS_KEY_MAP[status]]

    return (
        <div
            className={`
                ${config.color}
                ${config.textColor}
                ${config.glow}
                px-4 py-2 sm:px-6 sm:py-3 rounded-full
                flex items-center gap-1.5 sm:gap-2
                backdrop-blur-sm
                font-medium text-xs sm:text-sm tracking-wide
                transition-all duration-300
                cursor-default
            `}
        >
            {config.icon}

            <span className="uppercase">{config.text}</span>
        </div>
    )
}
