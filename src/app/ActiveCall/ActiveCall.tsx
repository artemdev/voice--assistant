import { ConversationTurn, type Status as StatusType } from '@/lib/types'

import Status from './Status'
import ConversationTimer from './ConversationTimer'
import {
    SpeakingAssistant,
    ListeningAssistant,
    IdleAssistant,
} from './assistants'
import Transcription from './Transcription'
import Controls from './Controls'
import Conversation from './Conversation'

import { STATUS } from '@/lib/data'

const ASSISTANTS = {
    speaking: SpeakingAssistant,
    listening: ListeningAssistant,
    idle: IdleAssistant,
    'listening paused': IdleAssistant,
    'speaking paused': IdleAssistant,
}

export default function ActiveCall({
    status,
    stopCall,
    transcript,
    resumeCall,
    pauseCall,
    conversationHistory,
    interruptSpeaking,
}: {
    status: StatusType
    stopCall: () => void
    startCall: () => void
    transcript: string
    resumeCall: () => void
    pauseCall: () => void
    interruptSpeaking: () => void
    conversationHistory: ConversationTurn[]
}) {
    const Assistant = ASSISTANTS[status as keyof typeof ASSISTANTS]

    return (
        <div className="min-h-screen xl:max-h-screen bg-gradient-to-br from-blue-150 via-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            <div className="w-full flex flex-col justify-center mx-auto py-8">
                <div className="flex flex-col justify-between gap-10">
                    <div className="flex items-center justify-center">
                        <ConversationTimer status={status} />
                    </div>

                    <div className="flex items-center justify-center">
                        <Status status={status} />
                    </div>

                    <div className="flex justify-center">
                        <Assistant interruptSpeaking={interruptSpeaking} />
                    </div>

                    <div className="m-3 transition-all duration-300">
                        <Transcription
                            transcript={transcript ? transcript : '...'}
                            isPaused={status === STATUS.IDLE}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Controls
                            {...{
                                resumeCall,
                                status,
                                pauseCall,
                                stopCall,
                            }}
                        />
                    </div>
                </div>

                {/* Conversation on mobile */}
                <div className="xl:hidden w-full ">
                    <Conversation conversationHistory={conversationHistory} />
                </div>
            </div>

            {/* Conversation on desktop */}
            <div className="hidden xl:block absolute top-0 right-6 w-96 max-h-screen overflow-hidden">
                <Conversation conversationHistory={conversationHistory} />
            </div>
        </div>
    )
}
