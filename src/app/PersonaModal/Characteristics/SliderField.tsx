import { Slider } from '@/components/ui/slider'
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { type Control } from 'react-hook-form'
import { type PersonaFormValues } from '@/lib/types'

type SliderFieldProps = {
    control: Control<PersonaFormValues>
    name:
        | 'openness'
        | 'conscientiousness'
        | 'extraversion'
        | 'agreeableness'
        | 'neuroticism'
    label: string
    description: string
}

export default function SliderField({
    control,
    name,
    label,
    description,
}: SliderFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <FormLabel
                            className={
                                'text-sm sm:text-base md:text-lg font-semibold text-gray-700'
                            }
                        >
                            {label}
                        </FormLabel>
                        <ValueBadge value={field.value ?? 50} />
                    </div>
                    <FormControl>
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={[field.value ?? 50]}
                            onValueChange={(value) => field.onChange(value[0])}
                        />
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500 mt-2">
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

const ValueBadge = ({ value }: { value: number }) => (
    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm sm:text-base rounded-full border border-blue-200/60 shadow-sm tabular-nums">
        {value}
    </span>
)
