import React from 'react'
import { SliderContext } from 'contexts/Slider.context'
import { SliderContextType } from 'shared/types/slider.type'

interface Props {
    children: React.ReactNode
    valueProvider: Partial<SliderContextType>
}

export function SliderProvider({ children, valueProvider }: Props) {
    return (
        <SliderContext.Provider value={valueProvider}>
            {children}
        </SliderContext.Provider>
    )
}
