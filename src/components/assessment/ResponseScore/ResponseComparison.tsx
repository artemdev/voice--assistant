import { isNil } from 'lodash'

import ComparisonBadge from './ComparisonBadge'

interface ResponseComparisonProps {
    vsPrevious?: number | null
    vsAverage?: number | null
}

export default function ResponseComparison({
    vsPrevious,
    vsAverage,
}: ResponseComparisonProps) {
    if (isNil(vsPrevious) && isNil(vsAverage)) {
        return
    }

    return (
        <div className="mt-2 flex gap-4 text-xs">
            {!isNil(vsPrevious) ? (
                <div>
                    <span className="text-gray-500">vs Previous:</span>

                    <ComparisonBadge value={vsPrevious} />
                </div>
            ) : null}

            {!isNil(vsAverage) ? (
                <div>
                    <span className="text-gray-500">vs Average: </span>

                    <ComparisonBadge value={vsAverage} />
                </div>
            ) : null}
        </div>
    )
}
