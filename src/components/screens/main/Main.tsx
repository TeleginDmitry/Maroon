import { BannerOne } from 'components/shared/banners/bannerOne/BannerOne'
import { BestProducts } from 'components/shared/bestProducts/BestProducts'
import { BannerTwo } from 'components/shared/banners/bannerTwo/BannerTwo'
import { Information } from 'components/shared/information/Information'
import { Join } from 'components/shared/join/Join'
import { Recommendations } from 'components/shared/recommendations/Recommendations'
import { IndividualCare } from 'components/shared/individualCare/IndividualCare'

export function Main() {
    return (
        <>
            <Recommendations></Recommendations>
            <BestProducts></BestProducts>
            <BannerOne></BannerOne>
            <IndividualCare></IndividualCare>
            <BannerTwo></BannerTwo>
            <Join></Join>
            <Information></Information>
        </>
    )
}
