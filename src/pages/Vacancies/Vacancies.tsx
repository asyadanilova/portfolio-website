import Benefits from "@/components/Vacancies/Benefits/Benefits";
import Conditions from "@/components/Vacancies/Conditions/Conditions";
import Faq from "@/components/Vacancies/Faq/Faq";
import VacanciesHero from "@/components/Vacancies/HeroSection/HeroSection";
import Offer from "@/components/Vacancies/Offer/Offer";
import Requirements from "@/components/Vacancies/Requirements/Requirements";

const Vacancies: React.FC = () => {
    return (
        <>
        <VacanciesHero />
        <Benefits />
        <Requirements />
        <Conditions />
        <Offer />
        <Faq />
        </>
    )
}

export default Vacancies;