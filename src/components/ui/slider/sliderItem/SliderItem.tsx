import { OptionsType } from 'shared/types/slider.type'
import styles from './SliderItem.module.scss'
import { SliderContext } from 'contexts/Slider.context'
import { useContext, useId, useRef } from 'react'

interface Props {
    children: ((options: OptionsType) => React.ReactNode) | React.ReactNode
}

export function SliderItem({ children }: Props) {
    const { activeId, nextId, prevId } = useContext(SliderContext)

    const id = useId()

    const slider = useRef<HTMLDivElement>(null)

    const options: OptionsType = {
        isNext: nextId === id,
        isPrev: prevId === id,
        isActive: activeId === id
    }

    return (
        <div ref={slider} className={styles.slider} data-unique-id={id}>
            {typeof children === 'function' ? children(options) : children}
        </div>
    )
}
