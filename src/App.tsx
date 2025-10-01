import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './components/MainPage/HeroSection/HeroSection'
import About from './components/MainPage/About/About'
import Services from './components/MainPage/Services/Services'
import Cars from './components/MainPage/Cars/Cars'
import Drivers from './components/MainPage/Drivers/Drivers'
import VacancyOffer from './components/MainPage/VacancyOffer/VacancyOffer'
import Contacts from './components/MainPage/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound'
import Vacancies from './pages/Vacancies/Vacancies'
import useDocumentTitle from './hooks/useDocumentTitle'

function App() {
  useDocumentTitle('title');
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Services />
            <Cars />
            <Drivers />
            <VacancyOffer />
            <Contacts />
          </>
        } />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
