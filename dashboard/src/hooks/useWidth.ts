import { useState, useCallback, useEffect } from 'react'

export const useWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}
