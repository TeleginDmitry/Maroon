import styles from './Slider.module.scss'
import { SliderProvider } from 'providers/Slider.provider'
import {
    ModulesClasses,
    SliderContextType,
    SliderLogicType
} from 'shared/types/slider.type'
import { Modules } from './modules/Modules'
import { DraggableCore } from 'react-draggable'
import { useSlider } from 'hooks/useSlider'
import { useSliderItem } from 'hooks/useSliderItem'
import { classNames } from 'utils/classNames/classNames'

interface Props extends SliderLogicType, ModulesClasses {
    children: React.ReactNode
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
        wrapperClass,
        containerClass,
        classNameNavigation,
        classNamePagination
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
                <Modules
                    classNameNavigation={classNameNavigation}
                    classNamePagination={classNamePagination}
                ></Modules>
            </div>
        </SliderProvider>
    )
}
