import ResponseComparison from './ResponseComparison'
import StarRating from './StarRating'

interface ResponseScoreProps {
    title: string
    rating?: number
    vsPrevious?: number | null
    vsAverage?: number | null
}

export default function ResponseScore({
    title,
    rating,
    vsPrevious,
    vsAverage,
}: ResponseScoreProps) {
    return (
        <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{title}</h4>
                <StarRating rating={rating} />
            </div>

            <ResponseComparison vsPrevious={vsPrevious} vsAverage={vsAverage} />
        </div>
    )
}
