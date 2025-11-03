'use client'

import moment from 'moment'
import { toast } from 'sonner'
import { useState, useRef, useEffect } from 'react'

import { generateResponse } from '@/lib/responses'
import { generateAssessment } from '@/lib/utils'
import { PersonaFormValues } from '@/lib/types'

import {
    type Status,
    type SessionData,
    type ConversationTurn,
} from '@/lib/types'

type UseVoiceReturn = {
    transcript: string
    isCallStarted: boolean
    status: Status
    conversationHistory: ConversationTurn[]
    sessionData: SessionData | null

    startCall: () => void
    stopCall: () => void
    resumeCall: () => void
    pauseCall: () => void
    interruptSpeaking: () => void
}

import { STATUS } from '@/lib/data'

export default function useVoice({
    currentPersona,
}: {
    currentPersona: PersonaFormValues | null
}): UseVoiceReturn {
    const [transcript, setTranscript] = useState('')
    const [status, setStatus] = useState<Status>(STATUS.IDLE)
    const [sessionData, setSessionData] = useState<SessionData | null>(null)

    const [isCallStarted, setIsCallStarted] = useState(false)
    const [conversationHistory, setConversationHistory] = useState<
        ConversationTurn[]
    >([])
    const [callStartTime, setCallStartTime] = useState<number | null>(null)

    const speechRecognitionRef = useRef<SpeechRecognition | null>(null)
    const currentUserMessageRef = useRef('')
    const isSpeechRecognitionAborted = useRef(false) // need this ref to handle pause of SpeechRecognition in callback

    const abortSpeechRecognition = () => {
        isSpeechRecognitionAborted.current = true
        speechRecognitionRef.current?.abort()
    }

    const startAvatarSpeak = (text: string) => {
        setStatus(STATUS.SPEAKING)

        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'en-US'
        utterance.rate = 0.95
        utterance.pitch = 1.0

        utterance.onstart = (event: SpeechSynthesisEvent) => {
            try {
                abortSpeechRecognition()

                const message = (
                    event?.currentTarget as SpeechSynthesisUtterance
                )?.text

                if (message) {
                    setConversationHistory((prev) => [
                        {
                            speaker: 'ai',
                            message: message,
                            timestamp: moment().toISOString(),
                        },
                        ...prev,
                    ])

                    setStatus(STATUS.SPEAKING)
                    setTranscript(message)
                }
            } catch (error) {
                toast.error(error as string)
            }
        }

        utterance.onend = () => {
            setStatus(STATUS.LISTENING)

            setTranscript('')

            speechRecognitionRef.current?.start()
        }

        speechSynthesis.speak(utterance)
    }

    function startCall() {
        currentUserMessageRef.current = ''

        try {
            speechRecognitionRef.current?.start()

            setStatus(STATUS.LISTENING)
            setIsCallStarted(true)
            setCallStartTime(Date.now())
        } catch (error) {
            toast.error('Failed to start Speech Recognition', {
                description: error as string,
            })
        }
    }

    const stopCall = () => {
        try {
            if (status === STATUS.LISTENING) {
                abortSpeechRecognition()
            }
            if (status === STATUS.SPEAKING) {
                speechSynthesis.cancel()
            }

            if (currentPersona) {
                const turns = conversationHistory.filter(
                    (msg) => msg.speaker == 'user'
                ).length

                const duration = callStartTime
                    ? moment().diff(moment(callStartTime), 'seconds')
                    : 0

                const assessment = generateAssessment(
                    turns,
                    duration,
                    conversationHistory,
                    {
                        name: currentPersona.name,
                        role: currentPersona.role,
                        tone: currentPersona.tone,
                    }
                )
                setSessionData(assessment)
            }

            setIsCallStarted(false)
            setStatus(STATUS.IDLE)
            setConversationHistory([])
            setTranscript('')
            setCallStartTime(null)
        } catch (error) {
            toast.error('Failed to stop call:', {
                description: error as string,
            })
        }
    }

    const resumeCall = () => {
        try {
            if (status === STATUS['LISTENING-PAUSED']) {
                speechRecognitionRef.current?.start()
                setStatus(STATUS.LISTENING)
            }

            if (status === STATUS['SPEAKING-PAUSED']) {
                speechSynthesis.resume()
                setStatus(STATUS.SPEAKING)
            }
        } catch (error) {
            toast.error('Failed to start Speech Recognition', {
                description: error as string,
            })
        }
    }

    const pauseCall = () => {
        try {
            abortSpeechRecognition()
            speechSynthesis.pause()

            if (status === STATUS.LISTENING) {
                setStatus(STATUS['LISTENING-PAUSED'])
            }

            if (status === STATUS.SPEAKING) {
                setStatus(STATUS['SPEAKING-PAUSED'])
            }
        } catch (error) {
            toast.error('Error while pausing the call', {
                description: error as string,
            })
        }
    }

    const interruptSpeaking = () => {
        try {
            speechSynthesis.cancel()
            speechRecognitionRef.current?.start()

            setStatus(STATUS.LISTENING)
            setTranscript('')
        } catch (error) {
            toast.error('Speech Synthesis error', {
                description: error as string,
            })
        }
    }

    useEffect(() => {
        // Initialize speech recognition
        const SpeechRecognition =
            window.webkitSpeechRecognition || window.SpeechRecognition
        speechRecognitionRef.current = new SpeechRecognition()
        speechRecognitionRef.current.interimResults = true
        speechRecognitionRef.current.lang = 'en-US'

        // Handle results
        speechRecognitionRef.current.onresult = (
            event: SpeechRecognitionEvent
        ) => {
            let finalTranscript = ''

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i]
                const transcript = result[0].transcript

                finalTranscript += transcript
            }

            setTranscript(finalTranscript)

            currentUserMessageRef.current = finalTranscript
        }

        speechRecognitionRef.current.onspeechstart = () => {
            try {
                speechSynthesis.cancel()
                isSpeechRecognitionAborted.current = false

                setStatus(STATUS.LISTENING)
            } catch (error) {
                toast.error(error as string)
            }
        }

        speechRecognitionRef.current.onspeechend = () => {
            if (isSpeechRecognitionAborted.current) {
                return
            }

            const userMessage = currentUserMessageRef.current

            if (userMessage) {
                setConversationHistory((prev) => [
                    {
                        speaker: 'user',
                        message: userMessage,
                        timestamp: moment().toISOString(),
                    },
                    ...prev,
                ])
            }

            startAvatarSpeak(generateResponse(transcript))
        }

        const cleanup = () => {
            speechSynthesis.cancel()
            speechRecognitionRef?.current?.stop()
        }

        window.addEventListener('beforeunload', cleanup)

        return () => {
            document.removeEventListener('beforeunload', cleanup)
            cleanup()
        }
    }, [])

    return {
        status,
        sessionData,
        transcript,
        startCall,
        interruptSpeaking,
        stopCall,
        isCallStarted,
        resumeCall,
        pauseCall,
        conversationHistory,
    }
}
