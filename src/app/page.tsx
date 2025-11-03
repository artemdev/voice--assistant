'use client'

import { useState } from 'react'
import * as motion from 'motion/react-client'

import useVoice from '@/app/ActiveCall/useVoice'

import PersonaModal from './PersonaModal'
import AssessmentModal from './AssessmentModal/AssessmentModal'
import ActiveCall from './ActiveCall'
import ActionButton from '@/components/common/ActionButton'

import { PersonaFormValues } from '@/lib/types'

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)
    const [currentPersona, setCurrentPersona] =
        useState<PersonaFormValues | null>(null)

    const {
        transcript,
        isCallStarted,
        stopCall,
        startCall,
        resumeCall,
        pauseCall,
        interruptSpeaking,
        status,
        conversationHistory,
        sessionData,
    } = useVoice({ currentPersona })

    if (isCallStarted) {
        return (
            <ActiveCall
                transcript={transcript}
                stopCall={() => {
                    setIsAssessmentModalOpen(true)
                    stopCall()
                }}
                interruptSpeaking={interruptSpeaking}
                startCall={startCall}
                resumeCall={resumeCall}
                pauseCall={pauseCall}
                status={status}
                conversationHistory={conversationHistory}
            />
        )
    }

    const handleTryAgain = () => {
        startCall()
        setIsAssessmentModalOpen(false)
    }

    return (
        <div className="bg-blue-100 h-screen flex items-center justify-center overflow-hidden">
            {!isAssessmentModalOpen && (
                <motion.div
                    animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.95, 1, 0.95],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="relative"
                >
                    <ActionButton
                        handleClick={() => setIsModalOpen(true)}
                        className="md:px-20 md:py-12 lg:px-6 sm:px-10 py-10 m-4"
                    >
                        CHOOSE AI PERSONA
                    </ActionButton>
                </motion.div>
            )}

            <PersonaModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                startCall={startCall}
                setCurrentPersona={setCurrentPersona}
            />

            <AssessmentModal
                sessionData={sessionData}
                isAssessmentModalOpen={isAssessmentModalOpen}
                setOpen={setIsAssessmentModalOpen}
                onTryAgain={handleTryAgain}
            />
        </div>
    )
}