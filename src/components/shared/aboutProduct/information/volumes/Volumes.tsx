import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './Volumes.module.scss'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    volumes: VolumeType[]
    volume: number | null
    setVolume: React.Dispatch<React.SetStateAction<number | null>>
}

export function Volumes({ volumes, volume, setVolume }: Props) {
    function onToggle(id: number) {
        setVolume(id)
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Объем:</p>
            <div className={styles.volumes}>
                {volumes.map(({ amount, id, unit }) => {
                    return (
                        <Checkbox
                            initialState={volume === id}
                            onToggle={() => onToggle(id)}
                            key={id}
                        >
                            {amount + unit}
                        </Checkbox>
                    )
                })}
            </div>
        </div>
    )
}
