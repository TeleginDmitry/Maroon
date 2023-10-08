import { OptionsType } from 'shared/types/slider.type'
import styles from './SliderItem.module.scss'
import { SliderContext } from 'contexts/Slider.context'
import { useContext, useId, useRef } from 'react'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children: ((options: OptionsType) => React.ReactNode) | React.ReactNode
    className?: string
}

export function SliderItem({ children, className }: Props) {
    const { activeId, nextId, prevId } = useContext(SliderContext)

    const id = useId()

    const slider = useRef<HTMLDivElement>(null)

    const options: OptionsType = {
        isNext: nextId === id,
        isPrev: prevId === id,
        isActive: activeId === id
    }

    return (
        <div
            ref={slider}
            className={classNames(styles.slider, { [className!]: !!className })}
            data-unique-id={id}
        >
            {typeof children === 'function' ? children(options) : children}
        </div>
    )
}
