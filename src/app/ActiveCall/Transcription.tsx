import moment from 'moment'

export default function Transcription({
    transcript,
    isPaused,
}: {
    transcript: string
    isPaused: boolean
}) {
    return (
        <div
            className={`max-w-2xl mx-auto transition-opacity duration-300 ${
                transcript
                    ? isPaused
                        ? 'opacity-40'
                        : 'opacity-100'
                    : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 rounded-2xl opacity-10 blur-xl"></div>

            <div className="relative p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-blue-200/40 shadow-sm">
                <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-blue-600/80 uppercase tracking-wide">
                            Transcribing
                        </span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium tabular-nums">
                        {moment().format('HH:mm:ss')}
                    </span>
                </div>

                <div className="text-sm text-gray-700 leading-relaxed italic pl-4">
                    {transcript}
                </div>
            </div>
        </div>
    )
}
