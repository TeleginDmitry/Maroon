import { NavListIcons } from "../navListIcons/NavListIcons"
import { NavListTexts } from "../navListTexts/NavListTexts"

const Navigation = () => {
    return (
        <>
            <nav>
                <NavListTexts />
            </nav>

            <NavListIcons />
        </>
    )
}

export { Navigation }
