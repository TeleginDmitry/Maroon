export interface OptionsType {
    isActive: boolean
    isPrev: boolean
    isNext: boolean
}

export interface NavigationType {
    position: 'left' | 'center' | 'right'
}

export interface SliderContextType {
    activeId?: string
    prevId?: string
    nextId?: string
    totalCount?: number
    countSwipe: number
    setIndexActive: React.Dispatch<React.SetStateAction<number>>
}
