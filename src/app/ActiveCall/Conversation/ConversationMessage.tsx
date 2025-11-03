import moment from 'moment'

type ConversationMessageProps = {
    isUserSpeaker: boolean
    message: string
    timestamp: string
    index: number
}

export default function ConversationMessage({
    isUserSpeaker,
    message,
    timestamp,
    index,
}: ConversationMessageProps) {
    // Calculate opacity based on index
    const getOpacity = () => {
        if (index <= 1) return 'opacity-100'

        return 'opacity-60'
    }

    return (
        <div
            className={`
                relative p-4 rounded-lg
                backdrop-blur-sm
                transition-all duration-300
                hover:shadow-lg
                overflow-hidden
                hover:opacity-100
                
                hover:cursor-pointer
                ${getOpacity()}

                ${
                    isUserSpeaker
                        ? 'bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-blue-400/40 shadow-sm shadow-blue-200/50'
                        : 'bg-gradient-to-br from-purple-50/80 to-pink-50/60 border-2 border-purple-400/40 shadow-sm shadow-purple-200/50'
                }
            `}
        >
            {/* Accent bar */}
            <div
                className={`
                    absolute top-0 left-0 w-1 h-full rounded-full
                    ${
                        isUserSpeaker
                            ? 'bg-gradient-to-b from-blue-400 to-blue-600'
                            : 'bg-gradient-to-b from-purple-400 via-purple-500 to-pink-500'
                    }
                `}
            />

            <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center gap-2">
                    <div
                        className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                            ${
                                isUserSpeaker
                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                                    : 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600'
                            }
                        `}
                    >
                        {isUserSpeaker ? 'U' : 'AI'}
                    </div>
                    <span
                        className={`text-xs font-bold uppercase tracking-wide ${
                            isUserSpeaker ? 'text-blue-700' : 'text-purple-700'
                        }`}
                    >
                        {isUserSpeaker ? 'You' : 'Assistant'}
                    </span>
                </div>
                <span className="text-xs text-gray-600 font-medium tabular-nums">
                    {moment(timestamp).format('HH:mm:ss')}
                </span>
            </div>

            <div className="text-sm font-normal leading-relaxed text-gray-800 pl-8">
                {message}
            </div>
        </div>
    )
}
