import { useRef } from 'react'
import styles from './UploadFile.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode
}

export function UploadFile({
    accept = 'image/*, video/*',
    multiple = false,
    className,
    children,
    ...rest
}: Props) {
    const inputFile = useRef<HTMLInputElement>(null)

    return (
        <label className={styles.label}>
            <input
                {...rest}
                className={classNames(styles.input, {
                    [className!]: !!className
                })}
                multiple={multiple}
                accept={accept}
                ref={inputFile}
                type='file'
            />
            {children}
        </label>
    )
}
