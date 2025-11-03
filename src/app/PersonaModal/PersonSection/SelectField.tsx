import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { type Control } from 'react-hook-form'
import { type PersonaFormValues } from '@/lib/types'

type SelectFieldProps = {
    control: Control<PersonaFormValues>
    name: 'name' | 'role' | 'tone'
    label: string
    placeholder: string
    options: readonly string[]
}

export default function SelectField({
    control,
    name,
    label,
    placeholder,
    options,
}: SelectFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        className={'text-sm font-semibold text-gray-700'}
                    >
                        {label}
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem key={option} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
