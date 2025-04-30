import FavoritSection from "../Component/LandingPage/FavoritSection"
import Navbar from "../Component/LandingPage/navbar"
import BannerSection from "../Component/LandingPage/SectionBanner"
import HeroSection from "../Component/LandingPage/sectionHero"
import Testimoni from "../Component/LandingPage/Testi"
import Shopping from "../Component/LandingPage/shopingSection"
import CSsection from "../Component/LandingPage/CSsection"

const LandingPage = () => {
    return (
        <>
    
        <Navbar/>
        <BannerSection/>
        <HeroSection/>
        <FavoritSection/>
        <Testimoni/>
        <Shopping/>
        <CSsection/>
        </>
    )
}

export default LandingPage