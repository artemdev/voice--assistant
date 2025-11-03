import * as z from 'zod'

export const NAMES = ['Mike', 'Kate', 'Jane']
export const ROLES = ['developer', 'sales person', 'customer support']
export const TONES = ['friendly', 'kind', 'calm']

export const personaFormSchema = z.object({
    // Persona fields
    name: z.enum(NAMES, {
        message: 'Please select a name.',
    }),
    role: z.enum(ROLES, {
        message: 'Please select a role.',
    }),
    tone: z.enum(TONES, {
        message: 'Please select a tone.',
    }),

    // OCEAN Characteristics (0-100)
    openness: z
        .number()
        .min(0, { message: 'Openness must be at least 0' })
        .max(100, { message: 'Openness must be at most 100' })
        .nullable(),
    conscientiousness: z
        .number()
        .min(0, { message: 'Conscientiousness must be at least 0' })
        .max(100, { message: 'Conscientiousness must be at most 100' })
        .nullable(),
    extraversion: z
        .number()
        .min(0, { message: 'Extraversion must be at least 0' })
        .max(100, { message: 'Extraversion must be at most 100' })
        .nullable(),
    agreeableness: z
        .number()
        .min(0, { message: 'Agreeableness must be at least 0' })
        .max(100, { message: 'Agreeableness must be at most 100' })
        .nullable(),
    neuroticism: z
        .number()
        .min(0, { message: 'Neuroticism must be at least 0' })
        .max(100, { message: 'Neuroticism must be at most 100' })
        .nullable(),

    // Scenario custom info - optional but validated when provided
    callId: z
        .string()
        .refine((val) => val === '' || /^\d{6}$/.test(val), {
            message: 'Call ID must be exactly 6 digits',
        }),
    service: z
        .string()
        .max(50, { message: 'Service must be at most 50 characters' }),
    subjectCase: z
        .string()
        .max(50, { message: 'Subject/Case must be at most 50 characters' }),
})

