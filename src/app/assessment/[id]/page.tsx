'use client'

import moment from 'moment'
import useSessionDataFromURL from './useSessionDataFromURL'

import ResponseScore from '@/components/assessment/ResponseScore'
import PersonaConfiguration from '@/components/assessment/PersonaConfiguration'
import ConversationTurns from '@/components/assessment/ConversationTurns'
import ConversationDuration from '@/components/assessment/ConversationDuration'

export default function SharedAssessmentPage() {
    const sessionData = useSessionDataFromURL()

    if (!sessionData) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-50">
                <div className="text-center">
                    <p className="mt-4 text-gray-600">
                        Session Assessment not found
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4">
            <div className="w-full max-w-2xl rounded-lg border bg-white p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Session Assessment
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        {moment(sessionData.timestamp).format(
                            'DD MMMM YYYY, h:mm A'
                        )}
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-4">
                    <ConversationTurns
                        turnCount={sessionData.conversationTurns?.length || 0}
                    />

                    <ConversationDuration
                        duration={sessionData.duration || 0}
                    />
                </div>

                <div className="mb-6 rounded-lg bg-blue-50 p-4">
                    <PersonaConfiguration
                        personaConfig={sessionData?.personaConfig}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Assessment Scores
                    </h3>

                    <ResponseScore
                        title="Communication Clarity"
                        rating={sessionData?.assessment?.communicationClarity}
                        vsPrevious={
                            sessionData?.comparison?.vsPrevious
                                ?.communicationClarity
                        }
                        vsAverage={
                            sessionData?.comparison?.vsAverage
                                ?.communicationClarity
                        }
                    />

                    <ResponseScore
                        title="Response Quality"
                        rating={sessionData?.assessment?.responseQuality}
                        vsPrevious={
                            sessionData?.comparison?.vsPrevious?.responseQuality
                        }
                        vsAverage={
                            sessionData?.comparison?.vsAverage?.responseQuality
                        }
                    />
                </div>

                <div className="mt-6 rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-600">
                    <p>
                        This is a shared assessment from a Voice AI Interface
                        session
                    </p>
                </div>
            </div>
        </div>
    )
}
