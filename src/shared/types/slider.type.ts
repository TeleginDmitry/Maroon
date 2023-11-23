import { DraggableData, DraggableEvent } from 'react-draggable'

export interface OptionsType {
    isActive: boolean
    isPrev: boolean
    isNext: boolean
    inView: boolean
}

export interface ModulesClasses {
    classNamePagination?: string
    classNameNavigation?: string
}

export interface SliderContextType {
    activeId?: string
    prevId?: string
    nextId?: string
    indexActive: number
    totalCount: number | null
    countSwipe: number
    swipeLeft?: () => void
    swipeRight?: () => void
}

export type DirectionType = 'right' | 'left' | 'top' | 'bottom'

export interface SliderLogicType {
    gap?: number
    countSwipe?: number
    duration?: number
    initialIndex?: number
}

export interface SliderHookReturnType {
    slidesRef: React.RefObject<HTMLDivElement>
    translate: number
    indexActive: number
    direction: DirectionType | null
    step: number
    onDrag: (event: DraggableEvent, data: DraggableData) => void
    onStop: (event: DraggableEvent, data: DraggableData) => void
    swipeLeft: () => void
    swipeRight: () => void
    totalCount: number | null
}
