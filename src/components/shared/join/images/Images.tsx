import { joinImages } from 'shared/data/joinImages.data'
import styles from './Images.module.scss'

export function Images() {
    return (
        <ul className={styles.images}>
            {joinImages.map(({ id, src }) => {
                return (
                    <img
                        className={styles.image}
                        key={id}
                        src={src}
                        alt='Картинка'
                    />
                )
            })}
        </ul>
    )
}
