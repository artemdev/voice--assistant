import { Play, Circle, Pause } from 'lucide-react'
import CircularButton from './CircularButton'

import { isPausedStatus } from '@/lib/utils'

import { type Status } from '@/lib/types'

export default function Controls({
    resumeCall,
    status,
    pauseCall,
    stopCall,
}: {
    resumeCall: () => void
    status: Status
    pauseCall: () => void
    stopCall: () => void
}) {
    return (
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 bg-white-300/50 border border-3 border-blue-300/50 rounded-[50px] sm:rounded-[60px] md:rounded-[70px] px-3 py-2 sm:px-6 sm:py-4 md:px-6 md:py-5">
            {isPausedStatus(status) ? (
                <CircularButton
                    onClick={resumeCall}
                    variant="gold"
                    icon={
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-current" />
                    }
                />
            ) : (
                <CircularButton
                    onClick={pauseCall}
                    variant="gold"
                    icon={
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-current" />
                    }
                />
            )}

            <CircularButton
                onClick={stopCall}
                variant="record"
                icon={
                    <Circle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current text-red-600" />
                }
            />
        </div>
    )
}
