import * as z from 'zod'

import { personaFormSchema } from './validations/persona'

import { STATUS } from '@/lib/data'

export type Persona = {
    id: string
    name: string
    role: string
    greeting: string
    responses: {
        understanding: string[]
        thinking: string[]
        helping: string[]
        closing: string[]
    }
}

export type Status = (typeof STATUS)[keyof typeof STATUS]

export type ConversationTurn = {
    speaker: 'user' | 'ai'
    message: string
    timestamp: string
}

export type AssessmentScores = {
    communicationClarity: number
    responseQuality: number
}

export type ComparisonMetrics = {
    vsPrevious: {
        communicationClarity: number
        responseQuality: number
    } | null
    vsAverage: {
        communicationClarity: number
        responseQuality: number
    } | null
}

export type SessionData = {
    sessionId: string
    timestamp: string
    duration: number
    turnCount: number
    personaConfig: PersonaConfig
    conversationTurns: ConversationTurn[]
    assessment: AssessmentScores
    comparison?: ComparisonMetrics
}

export type PersonaConfig = { name: string; role: string; tone: string }

export type PersonaFormValues = z.infer<typeof personaFormSchema>
