import styles from './Volumes.module.scss'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    volumes: VolumeType[]
}

export function Volumes({ volumes }: Props) {
    return (
        <ul className={styles.volumes}>
            {volumes.map(({ amount, id, unit }) => {
                return (
                    <li className={styles.volume} key={id}>
                        {amount + unit}
                    </li>
                )
            })}
        </ul>
    )
}
