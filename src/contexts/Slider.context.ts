import { createContext } from 'react'
import { SliderContextValues } from 'shared/types/slider.type'

export const SliderContext = createContext<Partial<SliderContextValues>>({})
