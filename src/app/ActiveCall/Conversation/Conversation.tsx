'use client'

import ConversationMessage from './ConversationMessage'

import { ConversationTurn } from '@/lib/types'

export default function Conversation({
    conversationHistory,
}: {
    conversationHistory: ConversationTurn[]
}) {
    return (
        <div className="p-4 flex max-h-screen flex-col overflow-hidden pt-20">
            <div className="space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
                {conversationHistory.map((turn, index) => (
                    <ConversationMessage
                        key={index}
                        index={index}
                        isUserSpeaker={turn.speaker === 'user'}
                        message={turn.message}
                        timestamp={turn.timestamp}
                    />
                ))}
            </div>
        </div>
    )
}
