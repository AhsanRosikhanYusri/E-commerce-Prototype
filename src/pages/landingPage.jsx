import FavoritSection from "../Component/LandingPage/FavoritSection"
import Navbar from "../Component/LandingPage/navbar"
import BannerSection from "../Component/LandingPage/SectionBanner"
import HeroSection from "../Component/LandingPage/sectionHero"
import Testimoni from "../Component/LandingPage/Testi"
import Shopping from "../Component/LandingPage/shopingSection"
import CSsection from "../Component/LandingPage/CSsection"
import CommentSection from "../Component/LandingPage/CommentSection"
import Footer from "../Component/LandingPage/footer"
import Widget from "../Component/UI-Component/widget"


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
        <CommentSection/>
        <Footer/>
        <Widget/>
     
        </>
    )
}

export default LandingPage