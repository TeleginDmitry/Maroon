import { useEffect, useRef, useState } from 'react'
import styles from './Slider.module.scss'
import { SliderProvider } from 'providers/Slider.provider'
import { NavigationType, SliderContextType } from 'shared/types/slider.type'
import { Modules } from './modules/Modules'

interface Props {
    children: React.ReactNode
    gap?: number
    countSwipe?: number
    transition?: number
    initialIndex?: number
    navigation?: boolean | NavigationType
    pagination?: boolean
}

export function Slider(props: Props) {
    const {
        children,
        gap = 10,
        transition = 0.3,
        initialIndex = 0,
        countSwipe = 1,
        navigation = true,
        pagination = true
    } = props

    const [transform, setTransform] = useState(0)
    const [indexActive, setIndexActive] = useState(initialIndex)
    const [valueProvider, setSliderContextType] = useState<SliderContextType>({
        countSwipe,
        setIndexActive
    })

    const slides = useRef<HTMLUListElement>(null)

    function slideChildrens() {
        return slides.current!.childNodes as NodeListOf<HTMLLIElement>
    }

    useEffect(() => {
        if (!slides.current) return

        const childrens = slideChildrens()

        const activeId = childrens[indexActive]?.dataset?.uniqueId
        const nextId = childrens[indexActive + 1]?.dataset?.uniqueId
        const prevId = childrens[indexActive - 1]?.dataset?.uniqueId

        const value: SliderContextType = {
            activeId,
            countSwipe,
            nextId,
            prevId,
            setIndexActive,
            totalCount: childrens.length
        }

        setSliderContextType(value)
    }, [countSwipe, indexActive])

    useEffect(() => {
        if (!slides.current) return

        function changeTransform() {
            let transform = 0

            const childrens = slideChildrens()

            for (let i = 0; i < indexActive; i++) {
                const children = childrens[i]
                transform += children.offsetWidth + gap
            }

            setTransform(transform)
        }

        changeTransform()

        window.addEventListener('resize', changeTransform)

        return () => {
            window.removeEventListener('resize', changeTransform)
        }
    }, [gap, indexActive])

    return (
        <SliderProvider valueProvider={valueProvider}>
            <div className={styles.slider}>
                <ul
                    ref={slides}
                    style={{
                        gap,
                        transition: `all ${transition}s`,
                        transform: `translateX(-${transform}px)`
                    }}
                    className={styles.slides}
                >
                    {children}
                </ul>
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
