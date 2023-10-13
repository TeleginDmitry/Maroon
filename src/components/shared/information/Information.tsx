import { Map } from 'components/ui/map/Map'
import styles from './Information.module.scss'
import { Contacts } from './contacts/Contacts'

export function Information() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Contacts></Contacts>
                <Map></Map>
            </div>
        </section>
    )
}
