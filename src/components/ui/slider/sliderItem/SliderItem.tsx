import { OptionsType } from 'shared/types/slider.type'
import styles from './SliderItem.module.scss'
import { SliderContext } from 'contexts/Slider.context'
import { useContext, useId } from 'react'
import { classNames } from 'utils/classNames/classNames'
import { useInView } from 'react-intersection-observer'

interface Props {
    children: ((options: OptionsType) => React.ReactNode) | React.ReactNode
    className?: string
}

export function SliderItem({ children, className }: Props) {
    const { activeId, nextId, prevId } = useContext(SliderContext)

    const { ref, inView } = useInView()

    const id = useId()

    const options: OptionsType = {
        isNext: nextId === id,
        isPrev: prevId === id,
        isActive: activeId === id,
        inView
    }

    return (
        <div
            ref={ref}
            className={classNames(styles.slider, { [className!]: !!className })}
            data-unique-id={id}
        >
            {typeof children === 'function' ? children(options) : children}
        </div>
    )
}
