import { createContext } from 'react'
import { SliderContextType } from 'shared/types/slider.type'

export const SliderContext = createContext<Partial<SliderContextType>>({})
