import { Networks } from 'components/shared/networks/Networks'
import styles from './Contacts.module.scss'
import { contacts } from './contacts.data'

export function Contacts() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Контакты</h1>
            <ul className={styles.contacts}>
                {contacts.map(({ id, title, value }) => {
                    return (
                        <li key={id} className={styles.contact}>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.value}>{value}</p>
                        </li>
                    )
                })}
            </ul>
            <Networks></Networks>
        </div>
    )
}
