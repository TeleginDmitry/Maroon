import styles from './Slider.module.scss'
import { SliderProvider } from 'providers/Slider.provider'
import {
    NavigationType,
    PaginationType,
    SliderContextType,
    SliderLogicType
} from 'shared/types/slider.type'
import { Modules } from './modules/Modules'
import { DraggableCore } from 'react-draggable'
import { useSlider } from 'hooks/useSlider'
import { useSliderItem } from 'hooks/useSliderItem'
import { classNames } from 'utils/classNames/classNames'

interface Props extends SliderLogicType {
    children: React.ReactNode
    navigation?: boolean | NavigationType
    pagination?: boolean | PaginationType
    wrapperClass?: string
    containerClass?: string
}

export function Slider(props: Props) {
    const {
        children,
        gap = 10,
        duration = 300,
        initialIndex = 0,
        countSwipe = 1,
        navigation = true,
        pagination = true,
        wrapperClass,
        containerClass
    } = props

    const {
        onDrag,
        onStop,
        slidesRef,
        translate,
        indexActive,
        swipeLeft,
        swipeRight,
        totalCount
    } = useSlider({
        countSwipe,
        duration,
        gap,
        initialIndex
    })

    const { activeId, nextId, prevId } = useSliderItem({
        indexActive,
        slidesRef
    })

    const valueProvider: SliderContextType = {
        totalCount,
        indexActive,
        countSwipe,
        activeId,
        nextId,
        prevId,
        swipeLeft,
        swipeRight
    }

    return (
        <SliderProvider valueProvider={valueProvider}>
            <div
                className={classNames(styles.slider, {
                    [wrapperClass!]: !!wrapperClass
                })}
            >
                <DraggableCore
                    enableUserSelectHack={true}
                    onDrag={onDrag}
                    onStop={onStop}
                >
                    <div
                        ref={slidesRef}
                        style={{
                            gap,
                            transform: `translate3d(${translate}px, 0px, 0px)`
                        }}
                        className={classNames(styles.slides, {
                            [containerClass!]: !!containerClass
                        })}
                    >
                        {children}
                    </div>
                </DraggableCore>
                {(navigation || pagination) && (
                    <Modules
                        navigation={navigation}
                        pagination={pagination}
                    ></Modules>
                )}
            </div>
        </SliderProvider>
    )
}
