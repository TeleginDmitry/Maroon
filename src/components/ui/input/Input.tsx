import { useState } from 'react'
import { classNames } from 'utils/classNames/classNames'
import styles from './Input.module.scss'
import { IconEye, IconEyeOff } from '@tabler/icons-react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
    isWrong?: boolean
}

export function Input({
    children,
    className,
    type = 'text',
    isWrong,
    ...rest
}: Props) {
    const [selectedType, setType] = useState(type)

    const changeType = () => {
        if (type !== 'password') return

        if (selectedType === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    return (
        <label className={styles.label}>
            {children}
            <input
                {...rest}
                className={classNames(styles.input, {
                    [className!]: !!className,
                    [styles.wrong]: isWrong
                })}
                type={selectedType}
            />

            {type === 'password' && (
                <>
                    {selectedType === 'password' ? (
                        <IconEye
                            className={styles.icon}
                            onClick={changeType}
                        ></IconEye>
                    ) : (
                        <IconEyeOff
                            className={styles.icon}
                            onClick={changeType}
                        ></IconEyeOff>
                    )}
                </>
            )}
        </label>
    )
}
