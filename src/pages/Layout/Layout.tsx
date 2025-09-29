import About from "@/components/MainPage/About/About"
import Cars from "@/components/MainPage/Cars/Cars"
import Contacts from "@/components/MainPage/Contacts/Contacts"
import HeroSection from "@/components/MainPage/HeroSection/HeroSection"
import Services from "@/components/MainPage/Services/Services"

const Layout: React.FC = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Services />
            <Cars />
            <Contacts />
        </>
    )
}

export default Layout;