import { Filter } from 'components/shared/filter/Filter'
import { Information } from 'components/shared/information/Information'
import { Join } from 'components/shared/join/Join'
import { ProductsList } from 'components/shared/productsList/ProductsList'

export function Catalog() {
    return (
        <>
            <Filter title='Каталог'></Filter>
            <ProductsList></ProductsList>
            <Join></Join>
            <Information></Information>
        </>
    )
}
