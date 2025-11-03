import SliderField from './SliderField'

import { SectionTitle, Card } from '@/components/common'

import { type Control } from 'react-hook-form'
import { type PersonaFormValues } from '@/lib/types'

export default function Characteristics({
    control,
}: {
    control: Control<PersonaFormValues>
}) {
    return (
        <Card>
            <SectionTitle className="mb-1 sm:mb-2">
                Personality Traits
            </SectionTitle>

            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                Adjust OCEAN characteristics to fine-tune personality
            </p>

            <div className="space-y-5 sm:space-y-7">
                <SliderField
                    control={control}
                    name="openness"
                    label="Openness"
                    description="Creativity and openness to new experiences"
                />

                <SliderField
                    control={control}
                    name="conscientiousness"
                    label="Conscientiousness"
                    description="Organization and dependability"
                />

                <SliderField
                    control={control}
                    name="extraversion"
                    label="Extraversion"
                    description="Sociability and energy level"
                />

                <SliderField
                    control={control}
                    name="agreeableness"
                    label="Agreeableness"
                    description="Compassion and cooperation"
                />

                <SliderField
                    control={control}
                    name="neuroticism"
                    label="Neuroticism"
                    description="Emotional stability and anxiety level"
                />
            </div>
        </Card>
    )
}
