import styles from './Networks.module.scss'
import { networks } from './networks.data'

interface Props {
    onClick?(): void
}

export function Networks({ onClick }: Props) {
    return (
        <ul className={styles.networks}>
            {networks.map(({ Icon, id, to }) => {
                return (
                    <li onClick={onClick} className={styles.network} key={id}>
                        <a href={to}>
                            <Icon></Icon>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
