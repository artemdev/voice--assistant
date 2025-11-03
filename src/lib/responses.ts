import { Persona } from './types'

// Simple personas with canned responses
export const PERSONAS: Persona[] = [
    {
        id: 'sarah',
        name: 'Sarah',
        role: 'Support Specialist',
        greeting: "Hi! I'm Sarah. How can I help you today?",
        responses: {
            understanding: [
                'I understand.',
                'I see what you mean.',
                'That makes sense.',
            ],
            thinking: [
                'Let me think about that...',
                'Hmm, good question...',
                'Let me check on that for you...',
            ],
            helping: [
                'I can definitely help with that.',
                "Here's what I'd suggest...",
                'Let me walk you through this...',
            ],
            closing: [
                'Is there anything else?',
                'Happy to help!',
                'Have a great day!',
            ],
        },
    },
    {
        id: 'mike',
        name: 'Mike',
        role: 'Technical Expert',
        greeting: "Hey there! I'm Mike. What technical issue can I solve?",
        responses: {
            understanding: [
                'Got it.',
                "Yeah, I've seen this before.",
                'Ah, interesting problem.',
            ],
            thinking: [
                'Okay, let me figure this out...',
                'Hmm, could be a few things...',
                'Alright, troubleshooting time...',
            ],
            helping: [
                'Try this solution...',
                "Here's a quick fix...",
                'The issue is probably...',
            ],
            closing: [
                'All fixed?',
                'Should be working now!',
                'Let me know if that helps.',
            ],
        },
    },
]

// Simple mocked response generator
export function generateResponse(userInput: string): string {
    const input = userInput.toLowerCase()
    const responses = PERSONAS[0].responses

    // Pick response based on keywords
    if (input.includes('thank') || input.includes('bye')) {
        return pickRandom(responses.closing)
    } else if (input.includes('help') || input.includes('problem')) {
        return pickRandom(responses.helping)
    } else if (input.includes('?')) {
        return pickRandom(responses.thinking)
    } else {
        return pickRandom(responses.understanding)
    }
}

function pickRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}
