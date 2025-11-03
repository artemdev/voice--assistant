import { Control } from 'react-hook-form'
import SelectField from './SelectField'
import { Card, SectionTitle } from '@/components/common'

import {
    NAMES,
    ROLES,
    TONES,
    type PersonaFormValues,
} from '@/lib/validations/persona'

export default function PersonSection({
    control,
}: {
    control: Control<PersonaFormValues>
}) {
    return (
        <Card>
            <SectionTitle className="mb-4 sm:mb-5">Persona</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <SelectField
                    control={control}
                    name="name"
                    label="Name"
                    placeholder="Select a name"
                    options={NAMES}
                />
                <SelectField
                    control={control}
                    name="role"
                    label="Role"
                    placeholder="Select a role"
                    options={ROLES}
                />
                <SelectField
                    control={control}
                    name="tone"
                    label="Tone"
                    placeholder="Select a tone"
                    options={TONES}
                />
            </div>
        </Card>
    )
}
