import { Map } from 'components/ui/map/Map'
import styles from './Information.module.scss'
import { Contacts } from './contacts/Contacts'

export function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.container}>
                <Contacts></Contacts>
                <Map></Map>
            </div>
        </div>
    )
}
