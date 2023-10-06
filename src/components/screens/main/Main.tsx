import { BestProducts } from 'components/shared/bestProducts/BestProducts'
import { Information } from 'components/shared/information/Information'
import { Join } from 'components/shared/join/Join'
import { Recommendations } from 'components/shared/recommendations/Recommendations'

export function Main() {
    return (
        <>
            <Recommendations></Recommendations>
            <BestProducts></BestProducts>
            <Join></Join>
            <Information></Information>
        </>
    )
}
