'use client'

import { toast } from 'sonner'

import useMockedLoading from './useMockedLoading'
import { generateShareableLink } from '@/lib/utils'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Copy, RotateCcw } from 'lucide-react'
import ResponseScore from '@/components/assessment/ResponseScore'
import PersonaConfiguration from '@/components/assessment/PersonaConfiguration'
import ConversationTurns from '@/components/assessment/ConversationTurns'
import ConversationDuration from '@/components/assessment/ConversationDuration'
import ActionButton from '@/components/common/ActionButton'
import ModalLoader from './ModalLoader'

import { type SessionData } from '@/lib/types'

type AssessmentModalProps = {
    setOpen: (open: boolean) => void
    onTryAgain?: () => void
    isAssessmentModalOpen: boolean
    sessionData: SessionData | null
}

export default function AssessmentModal({
    setOpen,
    onTryAgain,
    isAssessmentModalOpen,
    sessionData,
}: AssessmentModalProps) {
    const loading = useMockedLoading()

    const handleCopyLink = () => {
        const shareableLink = generateShareableLink(sessionData)

        if (shareableLink) {
            navigator.clipboard.writeText(shareableLink).then(() => {
                toast.success('Link Copied!')
            })
        }
    }

    return (
        <Dialog open={isAssessmentModalOpen} onOpenChange={setOpen}>
            {loading ? (
                <ModalLoader />
            ) : (
                <DialogContent className="max-h-[90vh] overflow-y-auto min-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Session Assessment</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                        <div className="mb-6 grid grid-cols-2 gap-4">
                            <ConversationTurns
                                turnCount={
                                    sessionData?.conversationTurns?.length || 0
                                }
                            />

                            <ConversationDuration
                                duration={sessionData?.duration || 0}
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
                                rating={
                                    sessionData?.assessment
                                        ?.communicationClarity
                                }
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
                                rating={
                                    sessionData?.assessment?.responseQuality
                                }
                                vsPrevious={
                                    sessionData?.comparison?.vsPrevious
                                        ?.responseQuality
                                }
                                vsAverage={
                                    sessionData?.comparison?.vsAverage
                                        ?.responseQuality
                                }
                            />
                        </div>

                        <div className="flex gap-2">
                            <ActionButton
                                handleClick={handleCopyLink}
                                variant="default"
                                className="flex-1 text-md"
                            >
                                <Copy className="mr-2 h-4 w-4" />
                                Copy Link
                            </ActionButton>

                            <ActionButton
                                handleClick={onTryAgain}
                                variant="outline"
                                className="text-md text-black bg-gray-50"
                            >
                                <RotateCcw className="mr-2 h-4 w-4" />
                                Try Again
                            </ActionButton>
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    )
}
