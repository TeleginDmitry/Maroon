import { BestProducts } from 'components/shared/bestProducts/BestProducts'
import { Information } from 'components/shared/information/Information'
import { Recommendations } from 'components/shared/recommendations/Recommendations'

export function Main() {
    return (
        <>
            <Recommendations></Recommendations>
            <BestProducts></BestProducts>
            <Information></Information>
        </>
    )
}
