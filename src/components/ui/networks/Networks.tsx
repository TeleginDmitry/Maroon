import styles from './Networks.module.scss'
import { networks } from './networks.data'

export function Networks() {
    return (
        <ul className={styles.networks}>
            {networks.map(({ Icon, id, to }) => {
                return (
                    <li className={styles.network} key={id}>
                        <a href={to}>
                            <Icon></Icon>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
