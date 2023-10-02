export interface Options {
    isActive: boolean
    isPrev: boolean
    isNext: boolean
}

export interface SliderContextValues {
    activeId?: string
    prevId?: string
    nextId?: string
    totalCount?: number
    countSwipe: number
    setIndexActive: React.Dispatch<React.SetStateAction<number>>
}
