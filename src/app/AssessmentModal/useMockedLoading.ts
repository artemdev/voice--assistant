import { useState, useEffect } from 'react'

const FETCH_DELAY = 500

export default function useMockedLoading() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, FETCH_DELAY)

        return () => clearTimeout(timer)
    }, [])

    return loading
}
