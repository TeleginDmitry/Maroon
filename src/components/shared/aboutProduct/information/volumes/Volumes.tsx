import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './Volumes.module.scss'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    volumes: VolumeType[]
}

export function Volumes({ volumes }: Props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Объем:</p>
            <div className={styles.volumes}>
                {volumes.map(({ amount, id, unit }) => {
                    return <Checkbox key={id}>{amount + unit}</Checkbox>
                })}
            </div>
        </div>
    )
}
