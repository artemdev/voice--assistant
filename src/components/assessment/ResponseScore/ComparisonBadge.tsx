export default function ComparisonBadge({ value }: { value: number }) {
    const rounded = Math.round(value * 10) / 10
    const isPositive = rounded > 0
    const isNeutral = rounded === 0

    if (isNeutral) {
        return (
            <span className="text-sm text-gray-500">→ Same as comparison</span>
        )
    }

    return (
        <span
            className={`text-sm ${
                isPositive ? 'text-green-600' : 'text-red-600'
            }`}
        >
            {isPositive ? '↑' : '↓'} {isPositive ? '+' : ''}
            {rounded.toFixed(1)} stars
        </span>
    )
}
