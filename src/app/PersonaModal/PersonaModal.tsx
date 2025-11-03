'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import ActionButton from '@/components/common/ActionButton'

import Characteristics from './Characteristics'
import CustomInfo from './CustomInfo'
import PersonSection from './PersonSection'

import {
    personaFormSchema,
    NAMES,
    ROLES,
    TONES,
} from '@/lib/validations/persona'

import { type PersonaFormValues } from '@/lib/types'

type PersonaModalProps = {
    open: boolean
    setOpen: (open: boolean) => void
    startCall?: () => void
    initialData?: PersonaFormValues | null
    setCurrentPersona?: (values: PersonaFormValues) => void
}

export default function PersonaModal({
    open,
    setOpen,
    startCall,
    initialData,
    setCurrentPersona,
}: PersonaModalProps) {
    const form = useForm<PersonaFormValues>({
        resolver: zodResolver(personaFormSchema),
        defaultValues: initialData || {
            name: NAMES[0],
            role: ROLES[0],
            tone: TONES[0],
            openness: 50,
            conscientiousness: 50,
            extraversion: 50,
            agreeableness: 50,
            neuroticism: 50,
            callId: '',
            service: '',
            subjectCase: '',
        },
    })

    function onSubmit(values: PersonaFormValues) {
        setCurrentPersona?.(values)

        setOpen(false)

        startCall?.()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-h-[90vh] overflow-y-auto w-[95vw] md:min-w-2xl lg:min-w-4xl border-0 bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 p-0">
                <div className="px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 md:px-8">
                    <DialogHeader className="mb-6 sm:mb-8">
                        <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Persona Settings
                        </DialogTitle>

                        <DialogDescription className="text-sm text-gray-500 mt-2">
                            Configure your AI assistant&apos;s personality and
                            behavior
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <PersonSection control={form.control} />

                            <Characteristics control={form.control} />

                            <CustomInfo control={form.control} />

                            <ActionButton
                                type="submit"
                                className="w-full py-6 rounded-xl text-xl"
                            >
                                Save Persona
                            </ActionButton>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
