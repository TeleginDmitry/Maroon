import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './Volumes.module.scss'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    volumes: VolumeType[]
    setSelectedVolumes: React.Dispatch<React.SetStateAction<number[]>>
}

export function Volumes({ volumes, setSelectedVolumes }: Props) {
    function onToggle(isChecked: boolean, id: number) {
        if (isChecked) {
            setSelectedVolumes((state) => [...state, id])
        } else {
            setSelectedVolumes((state) => state.filter((item) => item !== id))
        }
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Объем:</p>
            <div className={styles.volumes}>
                {volumes.map(({ amount, id, unit }) => {
                    return (
                        <Checkbox
                            onToggle={(isChecked) => onToggle(isChecked, id)}
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
