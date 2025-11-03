const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60

    return `${mins}m ${secs}s`
}

export default function ConversationDuration({
    duration,
}: {
    duration: number
}) {
    return (
        <div className="rounded-lg border p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">
                {formatDuration(duration || 0)}
            </p>
            <p className="text-sm text-gray-600">Duration</p>
        </div>
    )
}
