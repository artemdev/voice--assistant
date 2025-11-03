import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Card } from '@/components/common'

import { type Control } from 'react-hook-form'
import { type PersonaFormValues } from '@/lib/types'

const FIELD_LABEL_STYLES = 'text-sm sm:text-base font-semibold text-gray-700'
const FIELD_DESCRIPTION_STYLES = 'text-xs text-gray-500'

export default function CustomInfo({
    control,
}: {
    control: Control<PersonaFormValues>
}) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full hover:cursor-pointer"
        >
            <Card className="border-blue-100/50 sm:p-0">
                <AccordionItem value="scenario-info">
                    <AccordionTrigger className="text-lg sm:text-xl font-semibold text-gray-800 hover:no-underline p-6 cursor-pointer">
                        Scenario Custom Info
                    </AccordionTrigger>

                    <AccordionContent>
                        <div className="space-y-4 sm:space-y-5 pt-2 px-6">
                            <FormField
                                control={control}
                                name="callId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={FIELD_LABEL_STYLES}
                                        >
                                            Call ID (optional)
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123456"
                                                {...field}
                                                maxLength={6}
                                            />
                                        </FormControl>
                                        <FormDescription
                                            className={FIELD_DESCRIPTION_STYLES}
                                        >
                                            Must be exactly 6 digits if provided
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="service"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={FIELD_LABEL_STYLES}
                                        >
                                            Service (optional)
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter service name"
                                                {...field}
                                                maxLength={50}
                                            />
                                        </FormControl>
                                        <FormDescription
                                            className={FIELD_DESCRIPTION_STYLES}
                                        >
                                            Maximum 50 characters
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="subjectCase"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={FIELD_LABEL_STYLES}
                                        >
                                            Subject/Case (optional)
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter subject or case"
                                                {...field}
                                                maxLength={50}
                                            />
                                        </FormControl>
                                        <FormDescription
                                            className={FIELD_DESCRIPTION_STYLES}
                                        >
                                            Maximum 50 characters
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    )
}
