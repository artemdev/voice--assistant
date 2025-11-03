import { clsx, type ClassValue } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

import { SessionData, ConversationTurn } from './types'

import { STATUS } from './data'

import { type Status } from './types'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const isPausedStatus = (status: Status): boolean => {
    return (
        [
            STATUS.IDLE,
            STATUS['LISTENING-PAUSED'],
            STATUS['SPEAKING-PAUSED'],
        ].find((s) => s === status) !== undefined
    )
}

export function generateAssessment(
    turnCount: number,
    duration: number,
    conversationTurns: ConversationTurn[],
    personaConfig: { name: string; role: string; tone: string }
): SessionData {
    const sessionId = `session-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`
    const timestamp = new Date().toISOString()

    // Mocked static data
    const sessionData: SessionData = {
        sessionId,
        timestamp,
        duration,
        turnCount,
        personaConfig,
        conversationTurns,
        assessment: {
            communicationClarity: 4,
            responseQuality: 5,
        },

        comparison: {
            vsPrevious: {
                communicationClarity: 1,
                responseQuality: 0,
            },
            vsAverage: {
                communicationClarity: 0.5,
                responseQuality: 0.8,
            },
        },
    }

    return sessionData
}

export function generateShareableLink(
    session: SessionData | null
): string | undefined {
    if (window === undefined || session === null) {
        return
    }

    try {
        const encoded = btoa(JSON.stringify(session))

        return `${window.location.origin}/assessment/${encoded}`
    } catch (error) {
        toast.error(error as string)
    }
}
