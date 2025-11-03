import { capitalize } from 'lodash'
import { PersonaConfig } from '@/lib/types'

export default function PersonaConfiguration({
    personaConfig,
}: {
    personaConfig?: PersonaConfig
}) {
    if (!personaConfig) {
        return
    }

    return (
        <div>
            <h2 className="mb-2 font-semibold text-gray-900">
                Persona Configuration
            </h2>

            <div className="grid grid-cols-3 gap-4 text-sm">
                {Object.entries(personaConfig).map(([key, value]) => {
                    return (
                        <div key={key}>
                            <span className="text-gray-600">
                                {capitalize(key)}:
                            </span>

                            <p className="font-medium">{capitalize(value)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
