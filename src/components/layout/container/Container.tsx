import { ReactNode } from "react";
import styles from './container.module.css';

interface IContainer {
    children: ReactNode;
}

const Container = ({ children }: IContainer) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export { Container };