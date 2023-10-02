import { Options } from 'shared/types/slider.type'
import styles from './SliderItem.module.scss'
import { SliderContext } from 'contexts/Slider.context'
import { useContext, useId, useRef } from 'react'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children: ((options: Options) => React.ReactNode) | React.ReactNode
}

export function SliderItem({ children }: Props) {
    const { activeId, nextId, prevId } = useContext(SliderContext)

    const id = useId()

    const slider = useRef<HTMLLIElement>(null)

    const options: Options = {
        isNext: nextId === id,
        isPrev: prevId === id,
        isActive: activeId === id
    }

    return (
        <li
            ref={slider}
            className={classNames(styles.slider, {
                [styles.slider__active]: id === activeId
            })}
            data-unique-id={id}
        >
            {typeof children === 'function' ? children(options) : children}
        </li>
    )
}
