import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { toast } from 'sonner'

import { SessionData } from '@/lib/types'

export default function useSessionDataFromURL() {
    const params = useParams()

    return useMemo<Partial<SessionData> | void>(() => {
        if (params.id && typeof params.id === 'string') {
            try {
                return decodeSessionFromLink(decodeURIComponent(params.id))
            } catch (error) {
                toast.error(error as string)
            }
        }
    }, [params.id])
}

function decodeSessionFromLink(encoded: string): Partial<SessionData> | void {
    try {
        const decoded = atob(encoded)

        return JSON.parse(decoded)
    } catch (error) {
        console.error('Failed to decode session data:', error)
    }
}
