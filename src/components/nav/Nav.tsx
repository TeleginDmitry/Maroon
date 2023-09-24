import { NavListIcon } from "components/nav-list-icon/NavListIcon";
import { NavListText } from "components/nav-list-text/NavListText";

const Nav = () => {
    return (
        <>
            <nav>
                <NavListText />
            </nav>

            <NavListIcon />
        </>
    )
}

export { Nav };