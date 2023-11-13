import { useState, useLayoutEffect } from 'react'
import { slideChildren } from 'utils/slideChildren/slideChildren'

interface Props {
    slidesRef: React.RefObject<HTMLElement>
    indexActive: number
}

export function useSliderItem({ indexActive, slidesRef }: Props) {
    const [activeId, setActiveId] = useState<string | undefined>(undefined)
    const [nextId, setNextId] = useState<string | undefined>(undefined)
    const [prevId, setPrevId] = useState<string | undefined>(undefined)

    useLayoutEffect(() => {
        if (!slidesRef.current) return

        const children = slideChildren(slidesRef)!

        const activeId = children[indexActive]?.dataset?.uniqueId
        const nextId = children[indexActive + 1]?.dataset?.uniqueId
        const prevId = children[indexActive - 1]?.dataset?.uniqueId

        setActiveId(activeId)
        setNextId(nextId)
        setPrevId(prevId)
    }, [indexActive, slidesRef])

    return { activeId, nextId, prevId }
}
