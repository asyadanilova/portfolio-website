import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './components/MainPage/HeroSection/HeroSection'
import About from './components/MainPage/About/About'
import Services from './components/MainPage/Services/Services'
import Cars from './components/MainPage/Cars/Cars'
import Contacts from './components/MainPage/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound'
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
            <Contacts />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
