export default function ConversationTurns({
    turnCount,
}: {
    turnCount: number
}) {
    return (
        <div className="rounded-lg border p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{turnCount}</p>
            <p className="text-sm text-gray-600">Conversation Turns</p>
        </div>
    )
}
