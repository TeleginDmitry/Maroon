import React from 'react'
import { SliderContext } from 'contexts/Slider.context'
import { SliderContextValues } from 'shared/types/slider.type'

interface Props {
    children: React.ReactNode
    valueProvider: Partial<SliderContextValues>
}

export function SliderProvider({ children, valueProvider }: Props) {
    return (
        <SliderContext.Provider value={valueProvider}>
            {children}
        </SliderContext.Provider>
    )
}
