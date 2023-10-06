import { useState, useLayoutEffect } from 'react'
import { slideChildrens } from 'utils/slideChildrens/slideChildrens'

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

        const childrens = slideChildrens(slidesRef)!

        const activeId = childrens[indexActive]?.dataset?.uniqueId
        const nextId = childrens[indexActive + 1]?.dataset?.uniqueId
        const prevId = childrens[indexActive - 1]?.dataset?.uniqueId

        setActiveId(activeId)
        setNextId(nextId)
        setPrevId(prevId)
    }, [indexActive, slidesRef])

    return { activeId, nextId, prevId }
}
