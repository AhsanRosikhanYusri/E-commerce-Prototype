
import NavbarHome from "../Component/homePage/NavbarHome"
import BannerSection from "../Component/LandingPage/SectionBanner"
import NewRelease from "../Component/homePage/NewRelease"
import FavoritSection from "../Component/LandingPage/FavoritSection"
import MenProducts from "../Component/homePage/MenProduct"
import WomenProducts from "../Component/homePage/WomenProducts"
import Jewerly from "../Component/homePage/Jewerly"
import Footer from "../Component/LandingPage/footer"

const Homepage = () => {
    return (
        <>
        <NavbarHome/>
        <BannerSection/>
        <NewRelease/>
        <FavoritSection/>
        <MenProducts/>
        <WomenProducts/>
        <Jewerly/>
    
        <Footer/>
        </>
    )
}

export default Homepage