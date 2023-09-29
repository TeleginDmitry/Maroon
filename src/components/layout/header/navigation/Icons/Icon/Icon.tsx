import { HeaderIcon } from "shared/types/header.type"

interface Props {
    item: HeaderIcon
}

const Icon = ({ item }: Props) => {
    return (
        <li>
            <a href='#'>
                <img src={item.data} alt={item.altData} />
            </a>
        </li>
    )
}

export { Icon }
