import { Button } from 'components/ui/button/Button'
import { CATALOG_SCREEN } from 'configs/screens.config'
import { Link } from 'react-router-dom'

interface Props {
    className: string
}

export function ShowAll({ className }: Props) {
    return (
        <Link className={className} to={CATALOG_SCREEN}>
            <Button>Смотреть все</Button>
        </Link>
    )
}
