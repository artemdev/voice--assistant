import { useEffect, useState } from 'react'
import moment from 'moment'

import { isPausedStatus } from '@/lib/utils'

import { type Status } from '@/lib/types'

export default function ConversationTimer({ status }: { status: Status }) {
    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        if (isPausedStatus(status)) {
            return
        }

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [status])

    return (
        <div className="flex items-center gap-2 sm:gap-3 bg-white/80 rounded-2xl px-6 py-3 shadow-xl border border-white/60 cursor-default">
            <time className="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-gray-800 tracking-tight tabular-nums">
                {moment.utc(seconds * 1000).format('mm:ss')}
            </time>
        </div>
    )
}
